import {pasteConstants} from '../_constants/paste.constants';
var PastebinAPI = require('pastebin-js');
var pastebin = new PastebinAPI("4d0e7ac85c09b0c56f4d4327896de86e")

pastebin = new PastebinAPI({
  'api_dev_key' : '4d0e7ac85c09b0c56f4d4327896de86e',
  'api_user_name' : 'divyesh_paste',
  'api_user_password' : 'Welcome@paste123'
 });

export const fetchPasteAction = () =>{
    return (dispatch)=>{
      pastebin.get(`https://pastebin.com/api/api_post.php`)
        .then(res => {
        const pasteLists = res.data;
        console.log("coming data",pasteLists);
        // dispatch({type:pasteConstants.PRODUCT_GETALL_REQUEST,payload:prod_data})
    })
  }
}

