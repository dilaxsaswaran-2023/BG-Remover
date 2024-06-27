from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from io import BytesIO
from PIL import Image
from rembg import remove

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    input_image = Image.open(file.stream)

    # Remove the background
    output_image = remove(input_image)

    # Save the output image to a bytes buffer
    buffer = BytesIO()
    output_image.save(buffer, format='PNG')
    buffer.seek(0)
    
    # Encode the image to base64 string
    processed_image_str = base64.b64encode(buffer.read()).decode('utf-8')
    
    return jsonify({'processedImg': processed_image_str})

if __name__ == '__main__':
    app.run(debug=True)
