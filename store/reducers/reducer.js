const initState= {
    packages:[
        {packageId:'1', packageName:'Package-A', price:5, imageUrl: 'https://mygroser.s3.ap-southeast-1.amazonaws.com/productImages/1000X1000/1594198815401-nasi%20lemak%20din.png'},
        {packageId:'2', packageName:'Package-B', price:6, imageUrl:'https://3.bp.blogspot.com/-1ZXW0dwInzg/Vp9Omym0YXI/AAAAAAAAAcE/3z_zPzW1uqU/s640/nasi%2Bayam.png'},
        {packageId:'3', packageName:'Package-C', price:7, imageUrl: 'https://3.bp.blogspot.com/-1ZXW0dwInzg/Vp9Omym0YXI/AAAAAAAAAcE/3z_zPzW1uqU/s640/nasi%2Bayam.png'},
        {packageId:'4', packageName:'Package-D', price:8, imageUrl: 'https://mygroser.s3.ap-southeast-1.amazonaws.com/productImages/1000X1000/1594198815401-nasi%20lemak%20din.png'},
        {packageId:'5', packageName:'Package-E', price:9, imageUrl:'https://3.bp.blogspot.com/-1ZXW0dwInzg/Vp9Omym0YXI/AAAAAAAAAcE/3z_zPzW1uqU/s640/nasi%2Bayam.png'},
        {packageId:'6', packageName:'Package-F', price:10, imageUrl: 'https://mygroser.s3.ap-southeast-1.amazonaws.com/productImages/1000X1000/1594198815401-nasi%20lemak%20din.png'},
        {packageId:'7', packageName:'Package-G', price:11, imageUrl:'https://3.bp.blogspot.com/-1ZXW0dwInzg/Vp9Omym0YXI/AAAAAAAAAcE/3z_zPzW1uqU/s640/nasi%2Bayam.png'},
      ]
}

const packageReducer= (state=initState, action)=>{
    return state;
}

export default packageReducer;