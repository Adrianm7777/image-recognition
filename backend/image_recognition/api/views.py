from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .ml_model import classify_image

class ImageUploadView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        image = request.data.get('file')

        if not image:
            return Response({'error': 'No image provided'}, status=400)
        
        class_name, confidence = classify_image(image.read())
        return Response({'class': class_name, 'confidence': confidence}, status=200)
