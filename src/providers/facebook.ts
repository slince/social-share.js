
import {Provider} from '../provider'

class Facebook extends Provider {
    getName(){
        return 'facebook'
    }

    getUrlTemplate(){
        return 'https://www.facebook.com/sharer.php?s=100&p[url]={url}&p[images][0]={image}&p[title]={title}&p[summary]={summary}'
    }
}

export default Facebook
