const productModel = require('./models/Product')

const getJeans = async (req, res) => {

    let products = await productModel.find({category: 'jeans'});
    let jeans = {};
    for(let item of products) {
      if(item.title in jeans){
          if(!jeans[item.title].color.includes(item.color) && item.availableQty > 0){
            jeans[item.title].color.push(item.color);
          }
          
          if(!jeans[item.title].size.includes(item.size) && item.availableQty > 0){
            jeans[item.title].size.push(item.size);
          }

      }else{
        jeans[item.title] = JSON.parse(JSON.stringify(item));
        if(item.availableQty > 0){
          jeans[item.title].color = [item.color];
          jeans[item.title].size = [item.size];
        }
      }
    }
    
    res.status(200).json({jeans})
  }
  

module.exports = {getJeans}