from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Load colors from JSON file
with open('colors.json', 'r') as file:
    colors = json.load(file)

@app.route('/colors', methods=['GET'])
def get_colors():
    search_query = request.args.get('q')
    if search_query:
        # Filter colors based on search query
        filtered_colors = [color for color in colors if search_query.lower() in color['name'].lower()]
        return jsonify({ 'items': filtered_colors })
    else:
        return jsonify({ 'items': colors })

if __name__ == '__main__':
    app.run(debug=True, host='localhost')
