from rest_framework import serializers
from .models import Sample

class SampleSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = Sample
        fields = ['id', 'name', 'note', 'file']

    def get_file(self, obj):
        request = self.context.get('request')
        if obj.file:
            return request.build_absolute_uri(obj.file.url)
        return None
