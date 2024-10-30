from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import SummarizeSerializer
from summarizer_model.response import get_summary

@api_view(['POST'])
def summary(request):
    input_text = request.data.get('input_txt')
    output_text = get_summary(input_text)

    data = {
        'input_text': input_text,
        'output_text': output_text
    }

    serializer = SummarizeSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(output_text, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
