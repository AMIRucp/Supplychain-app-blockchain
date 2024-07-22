// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductMarketplace {
    struct Product {
        uint id;
        string name;
        uint price;
        address payable seller; 
        bool sold;
    }
    Product[] public products;
    mapping(uint => address) public productToOwner;
    mapping(address => uint[]) public ownerToProducts;

    event ProductCreated(uint id, string name, uint price, address seller);
    event ProductSold(uint id, address buyer, uint price);

    function createProduct(string memory _name, uint _price) public {
        uint productId = products.length;
        products.push(Product(productId, _name, _price, payable(msg.sender), false));
        productToOwner[productId] = msg.sender;
        ownerToProducts[msg.sender].push(productId);
        emit ProductCreated(productId, _name, _price, msg.sender);
    }
    function buyProduct(uint _productId) public payable {
        require(products[_productId].seller != address(0), "Product does not exist");
        require(!products[_productId].sold, "Product already sold");
        require(msg.value >= products[_productId].price, "Insufficient funds");

        products[_productId].sold = true;
        products[_productId].seller.transfer(products[_productId].price);
        productToOwner[_productId] = msg.sender;
        ownerToProducts[msg.sender].push(_productId);
        emit ProductSold(_productId, msg.sender, products[_productId].price);
    }
    function getProductCount() public view returns (uint) {
        return products.length;
    }
}