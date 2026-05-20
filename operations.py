import json
import sqlite3

import requests

# Agent platform endpoint
url = "https://tomassemide.app.n8n.cloud/"
webhook = "webhook-test"
key = "d026b230-dc98-4dda-9295-33fe8042a9b4"
endpoint = url + "/" + webhook + "/" + key

# SQLite DB connection
db_connection = sqlite3.connect("db.db")
db_cursor = db_connection.cursor()


# Send input to agent
def agent_request(input):
    body = {}

    response = requests.post(endpoint, json=body)

    if response.status_code == 200:
        # response_json = json.loads(response.text)
        # print(response_json)
        return True
    else:
        # print(f"Error: {response.status_code} - {response.text}")
        return False


# Receive agent output
def agent_output():
    body = {}

    response = requests.get(endpoint)
    if response.status_code == 200:
        response_json = json.loads(response.text)
        return response_json
    else:
        return ""


# Query previous evaluation results
def queryResults(job_name, cv_email):
    query = f"SELECT results FROM evaluations WHERE job_name = {job_name} AND cv_email = {cv_email};".format(
        job_name, cv_email
    )

    db_cursor.execute(query)
    results = db_cursor.fetchall()[0]
    return results


# Store new evaluation results
def storeResults(job_name, cv_email, results):
    query = (
        f"INSERT INTO evaluations VALUES ({job_name}, {cv_email}, {results})".format(
            job_name, cv_email, results
        )
    )

    db_cursor.execute(query)
    db_connection.commit()


# Update existing evaluation results
def updateResults(job_name, cv_email, results):
    query = f"UPDATE evaluations SET results = {results} WHERE job_name = {job_name} AND cv_email = {cv_email};".format(
        results, job_name, cv_email
    )

    db_cursor.execute(query)
    db_connection.commit()


# Close DB connection when shutting down
def shutdown():
    db_cursor.close()
    db_connection.commit()
    db_connection.close()
