import dog from '../../../images/dog2.png';
import style from './dog-mage.module.css';

function DogImage() {
	return <img src={dog} alt='dog' className={style.image} />;
}

export default DogImage;
