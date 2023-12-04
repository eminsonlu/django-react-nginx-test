from rest_framework.response import Response
from rest_framework.decorators import api_view

from external_modules import hello

@api_view(['GET'])
def getData(request):
    person = hello.hello_world()
    return Response(person)