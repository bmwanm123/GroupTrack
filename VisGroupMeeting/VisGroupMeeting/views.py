import json
import mimetypes
import os

from flask import Flask, jsonify, render_template, request

from VisGroupMeeting import app, data

mimetypes.add_type("application/javascript", ".js", True)


@app.route('/')
def index():
    #print(data.personal_ability) # TODO

    return render_template('indexG2.html',dialogs=json.dumps(data.dialogs),sessions=json.dumps(data.sessions)
                           ,personal_ability = json.dumps(data.personal_ability),headPos=json.dumps(data.headPos)
                           ,keywordsOfPersonal = json.dumps(data.keywordsOfPersonal)
                           ,agendas = json.dumps(data.agendas),chordData=json.dumps(data.chordData),
                           stopwords = json.dumps(list(data.stopwords)),
                           keyframes = json.dumps(data.key_frames),
                           meetingName = data.meetingName)
@app.route('/replyTree',methods=['GET'])
def replyTree():
    if request.method == "GET":
        session_id = request.args['session_id']
        return json.dumps(data.getReplyTree(int(session_id)))
