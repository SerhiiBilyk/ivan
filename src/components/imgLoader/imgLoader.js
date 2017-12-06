/**
 * by default, all iterated images which you want to include inside component must have names 1.jpg, 2.jpg ...
 * @param  {[String]} context           [path to img folder]
 * @param  {[Number]} quantity          [images quantity]
 * @param  {String} [extension='jpg'] [img extension]
 * @return {[Array]}                   [description]
 */

export const imageGenerator=(context,quantity,extension='jpg')=>{
  return(
    Array(quantity).fill(0).map((el, i) =>context(`./${i + 1}.${extension}`))
  )
}

/**
 * Use example
 * import {imageGenerator} from ...
 *
 * var context = require.context('./img', false, /[0-9]+(.png)$/);
 * var images = imageGenerator(context, 6, 'png');
 *
 * Next, you can [].map your images variable
 */
