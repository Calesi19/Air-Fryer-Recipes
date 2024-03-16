import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import make_response

# Initialize the Firebase Admin SDK
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': 'airfryerrecipes-bf3ea',
})

def fetch_recipes(request):
    db = firestore.client()

    recipes_ref = db.collection('recipes')
    docs = recipes_ref.stream()

    recipes = []
    for doc in docs:
        recipes.append(doc.to_dict())

    # Create a response object and set CORS headers
    response = make_response({'recipes': recipes})
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'

    return {'recipes': recipes}
