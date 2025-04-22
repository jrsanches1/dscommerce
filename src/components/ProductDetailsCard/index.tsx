import './styles.css';
import computerImg from '../../assets/computer.png';
import ProductCategory from '../ProductCategory';

export default function ProductDetailsCard() {

    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={computerImg} alt="Computador" />
            </div>
            <div className="dsc-product-details-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
                <p>
                    Laptop Yoga 7i, i5 intel Core, HD 1TB, 16GB RAM.
                </p>
                <div className="dsc-category-container">
                    <ProductCategory />
                    <ProductCategory />
                </div>
            </div>
        </div>
    );
}