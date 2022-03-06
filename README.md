
##  Backend Bağlantısı

- Uygulama bu hali ile localhost:3000 portuna bakmaktadır.
- Server başka bir portda veya sunucu da ayağa kaldırıldı ise App.js deki Apollo client'ı yeni endpointe göre düzenlenmelidir.
- endpointin sonuna /graphql eklenmelidir çünkü server grapghql sunnmaktadır.

örn. -> uri: "http://localhost:3000/graphql", 

### `npm start`

- uygulama başlatmak için npm start, npm run start kullanılabilir

### `npm test`

filterItem ve item componentleri için test bulunmaktadır (import edilen veri kullanıldığı için byu componentler test edildi)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Developer notları

- Figma designın da düşük çözünürlükler bulunmadıgı için responsivite 1440px 'e göre ayarlandı.
- servis çağrımları yapıldığı esnada, tasarımda bulunmayan ama olması gerektiğini düşündüğüm  'veri getiriliyor' tarzı uyarı mesaj ekranda gösterildi.