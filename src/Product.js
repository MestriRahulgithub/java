import React from 'react'
import ProductReview from './ProductReview'
const Product = () => {






    return (
        <div>
            <div class="" id="Product">
                <h1 style={{ textalign: 'center' }}>Product Review</h1>

            </div>
            <div class="row gap-5 justify-content-center" style={{ backgroundColor: 'crimson' }}>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <ProductReview
                        productId={1}
                        productName="FASTRACK"
                        imageUrl="https://images.pexels.com/photos/17775091/pexels-photo-17775091/free-photo-of-close-up-of-a-smartwatch.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <ProductReview
                        productId={2}
                        productName="APPLE"
                        imageUrl="https://tse1.mm.bing.net/th?id=OIP.wbp0YAxJnMD5rZ7GYSdYtwHaEK&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={3}
                        productName="FOSSIL"
                        imageUrl="https://tse1.explicit.bing.net/th?id=OIP.zUtHTmIKPzAQp8-aYJp9DAHaE7&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={4}
                        productName="GOOGLE"
                        imageUrl="https://tse4.mm.bing.net/th?id=OIP.YIMUaYdtuMOKVCDE2l2B6wAAAA&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={5}
                        productName="ASIN"
                        imageUrl="https://tse2.mm.bing.net/th?id=OIP.81tj_uJMrF1wMkReaLVvWgHaEK&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={6}
                        productName="Samsung"
                        imageUrl="https://tse4.mm.bing.net/th?id=OIP.sqQbewOqZPoOTUiCCGyTUgHaHa&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={7}
                        productName="WALMART"
                        imageUrl="https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <ProductReview
                        productId={8}
                        productName="TITAN"
                        imageUrl="https://images.pexels.com/photos/18259150/pexels-photo-18259150/free-photo-of-smartwatch-on-ground.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                </div>

            </div>
        </div>
    )
}

export default Product
