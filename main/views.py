from django.shortcuts import render, HttpResponse

def homepage(request):
    return HttpResponse("Talant")

def test (request):
    return render(request, "test.html")

def second (request):
    return HttpResponse("This is page 2")

def third (request):
    return HttpResponse("This is page 3")


# Create your views here.
