from rest_framework import serializers
from .models import Summarize_table

class SummarizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Summarize_table
        fields = '__all__'