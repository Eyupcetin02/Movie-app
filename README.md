# Netflix-clone

## Proje açıklaması 

Projede Netflix'in sitesini klonlamaya çalıştım. Proje 3 sayfadan oluşuyor: 
</br></br>
<b>Giriş sayfası:</b> Giriş sayfasında giriş butonları, input ve akordiyon componenti bulunuyor. sayfadaki inputta mail kontrolü yapabilir ve giriş butonuna tıklayarak kullanıcı giriş sayfasına gidebilirsiniz.
</br></br>
<b>Kullanıcı giriş sayfası:</b> Kullanıcı giriş sayfasında siteye kayıt olma veya giriş yapma işlemleri gerçekleştirilir ve bizi ana sayfaya yönlendirir.
</br>
</br>
<b>Dizi ve filmlerin listelendiği sayfa:</b> Bu sayfada 2 farklı kategoriye ait film ve diziler bulunmakta. Her birinin adı, açıklaması ve resmi yer alıyor sayfadan ayarlar , kayıt edilenler ve satın alma sayfalarına gidilir.
</br></br>
Proje Docker Compose ile çalıştırılmaya uygun olarak hazırlandı.
## Proje paketleri 

| client             | server |
|-------------------------| -------------|
| axios| axios|
| redux-toolkit| bcryptjs |
| react | body-parse  |
| react-router-dom  | cors  |
| react-redux |  dotenv |
| react-icons|  express  |
| |  jsonwebtoken  |
| |  mongoose  |
| |  redis  |
| |  swagger  |

## Proje çalıştırma
<b>Docker Compose ile : </b> 
</br></br>
1- Öncelikle projeyi indirin ve terminal ile projenin bulunduğu dizine gidin.
</br></br>
2- Ardından docker compose için terminale `docker-compose up ` yazın.


