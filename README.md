# Omreon-case

## Proje açıklaması 

Projede Netflix'in sitesini klonlamaya çalıştım. Proje 3 sayfadan oluşuyor: 
</br></br>
<b>Giriş sayfası:</b> Giriş sayfasında giriş butonları, input ve akordiyon componenti bulunuyor. Butonlara basıldığında bizi kullanıcı girişi sayfasına yönlendiriyor.
</br></br>
<b>Kullanıcı giriş sayfası:</b> Kullanıcı giriş sayfasında sadece bir buton ve bir input mevcut; butona basıldığında bizi dizi ve filmlerin bulunduğu sayfaya götürüyor.
</br>
</br>
<b>Dizi ve filmlerin listelendiği sayfa:</b> Bu sayfada 2 farklı kategoriye ait 5'er film ve dizi bulunmakta. Her birinin adı, açıklaması ve resmi yer alıyor.
</br></br>
Proje Docker ile çalıştırılmaya uygun olarak hazırlandı.
## Proje paketleri 

| Paketler             |
|-------------------------|
| axios| 
| redux-toolkit| 
| react | 
| react-router-dom  | 
| react-redux | 
| react-icons| 

## Proje çalıştırma
<b>Docker ile : </b> 
</br></br>
1- Öncelikle projeyi indirin ve terminal ile projenin bulunduğu dizine gidin.
</br></br>
2- Ardından docker image oluşturmak için terminale `docker build -t image_name .` yazın.
</br></br>
3- Ardından oluşturduğumuz image'yi çalıştırmak için terminale `docker run -p 3000:3000 image_name` yazın ve projeyi 3000 portundan kullanın.

<b>NPM ile : </b> 
</br></br>
1- Projeyi indirin ve terminal ile projenin bulunduğu dizine gidin.
</br></br>
2- Terminale `npm install` komutunu yazarak projenin bağımlılıklarını indirin.
</br></br>
3- Ardından terminale `npm start` yazarak projeyi çalıştırın ve `http://localhost:3000/` üzerinden projeye erişin.
