from .serializers import MyTokenObtainPairSerializer #追加

#追加
class ObtainTokenPairWithColorView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer