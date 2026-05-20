import json
import sqlite3
import threading
import time

import requests

# Agent platform endpoint
url = "https://tomassemide.app.n8n.cloud"
webhook = "webhook-test"
key = "d026b230-dc98-4dda-9295-33fe8042a9b4"
endpoint = url + "/" + webhook + "/" + key

# SQLite DB connection
db_connection = sqlite3.connect("db.db")
db_cursor = db_connection.cursor()


# Send input to agent
def agent_request(job_description, cv_text):
    body = {"job_description": job_description, "cv_text": cv_text}

    response = requests.post(endpoint, json=body)

    if response.status_code == 200:
        # response_json = json.loads(response.text)
        # print(response_json)
        return True
    else:
        # print(f"Error: {response.status_code} - {response.text}")
        return False


# Query previous evaluation results
def queryResults(job_name, cv_email):
    query = "SELECT results FROM evaluations WHERE job_name = ? AND cv_email = ?;"
    db_cursor.execute(query, (job_name, cv_email))
    row = db_cursor.fetchone()
    return json.loads(row[0]) if row else None


# Store new evaluation results
def storeResults(job_name, cv_email, results):
    query = "INSERT INTO evaluations VALUES (?, ?, ?)"
    db_cursor.execute(query, (job_name, cv_email, json.dumps(results)))
    # db_connection.commit()


# Update existing evaluation results
def updateResults(job_name, cv_email, results):
    query = "UPDATE evaluations SET results = ? WHERE job_name = ? AND cv_email = ?;"
    db_cursor.execute(query, (json.dumps(results), job_name, cv_email))
    # db_connection.commit()


# Thread to commit database state every 2 minutes
def deleteResults(job_name, cv_email):
    query = "DELETE FROM evaluations WHERE job_name = ? AND cv_email = ?;"
    db_cursor.execute(query, (job_name, cv_email))
    # db_connection.commit()


# Delete previous evaluation results
def commitThread():
    db_connection.commit()
    time.sleep(120)


# Close DB connection when shutting down
def shutdown():
    db_connection.commit()
    db_cursor.close()
    db_connection.close()


my_thread = threading.Thread(target=commitThread)
my_thread.start()
