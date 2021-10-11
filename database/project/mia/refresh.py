import praw
import prawcore
import pymongo

import config

'''
1. Retrieve all required reddit data
2. Format data for instant collection creation
3. Drop rmidb's subreddit collection
4. Create a new subreddits collection
'''

user_agent = "linux:com.b128.mia:v0.0.1 Moderator Influence Analyzer data gathering bot (by /u/Docter60) powered by PRAW API"

db_name = "miadb"
s_col_name = "Subreddits"
m_col_name = "Moderators"
s_entry = "subreddits"
m_entry = "moderators"
subreddit_count = 100

def retrieveRedditData():
    reddit = praw.Reddit(client_id=config.client_id,
                         client_secret=config.client_secret,
                         username=config.username,
                         password=config.password,
                         user_agent=user_agent)
    subreddits = list(reddit.subreddits.popular(limit=subreddit_count))

    subreddit_dict_list = []
    forbidden = 0
    for subreddit in subreddits:
        name = subreddit.display_name
        try:
            mod_list = list(reddit.subreddit(name).moderator())
            mod_name_list = [mod.name for mod in mod_list]
            subreddit_dict_list.append({"name": name, m_entry: mod_name_list})
        except prawcore.Forbidden:
            forbidden += 1
            print("Got forbidden " + str(forbidden) + " times...")

    return subreddit_dict_list


def refreshDatabase(subreddit_dict_list):
    client = pymongo.MongoClient(config.mongo_client)
    db = client[db_name]

    db.drop_collection(s_col_name)
    col = db[s_col_name]
    col.insert_many(subreddit_dict_list)
    createReverseCollection(client)


def createReverseCollection(client):
    db = client[db_name]
    srCol = db[s_col_name]

    mods = srCol.distinct(m_entry)
    print(len(mods))

    moderator_dict_list = []
    for mod in mods:
        sub_list = srCol.find({m_entry: mod}, {"_id": 0, "name": 1})
        sub_name_list = [sub['name'] for sub in sub_list]
        moderator_dict_list.append({"name": mod, s_entry: sub_name_list})
    
    db.drop_collection(m_col_name)
    col = db[m_col_name]
    col.insert_many(moderator_dict_list)


def main():
    refreshDatabase(retrieveRedditData())


if __name__ == "__main__":
    main()
