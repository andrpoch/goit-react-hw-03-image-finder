const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '25752976-c432b2b3d55e7cabed38c70ac';

export default class api { 
   constructor () {
      this.page = 1;
      this.searchQuery ='';
   }
   getImages() {
      const fetchUrl = `${BASE_URL}?key=${API_KEY}q=${this.searchQuery}&page=${this.page}&image_type=photo&orientation=horizontal&per_page=12`;
      return fetch(fetchUrl).then((response) => {
         if (response.ok) {
            return response.json();
         }
         return Promise.reject(new Error(`No images ${this.searchQuery}`));
      }).then((responce) => {
         this.incrementPage();
         return responce;
      });
   }
   incrementPage() {
      this.page += 1;
   };
   resetPage() {
      this.page=1;
   }
   get query (){
      return this.searchQuery;
   }
   set query(newQuery) {
      this.searchQuery = newQuery;
   };
};

