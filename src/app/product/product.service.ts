import { EventEmitter } from '@angular/core';

export class ProductService {
  products = [
    {
      id: 0,
      imgPath: '../assets/images/product-images/laptop-0.jpg',
      model: 'MSI Raider GE66',
      price: 489900,
      priceDisplay: '489,900৳',
      detail: {
        processor: 'Intel Core i9-12900HK',
        memory: '32GB DDR5',
        storage: '2TB NVMe SSD',
        graphics: 'RTX 3080 Ti 16GB GDDR6',
      },
      quantity: 56,
      quantityInitial: 56,
    },
    {
      id: 1,
      imgPath: '../assets/images/product-images/laptop-1.jpg',
      model: 'HP ZBook Create G7',
      price: 398000,
      priceDisplay: '398,000৳',
      detail: {
        processor: 'Intel Core i9-10885H',
        memory: '32GB DDR4',
        storage: '1 TB NVMe SSD',
        graphics: 'RTX 2080 Super Max-Q 8GB',
      },
      quantity: 97,
      quantityInitial: 97,
    },
    {
      id: 2,
      imgPath: '../assets/images/product-images/laptop-2.jpg',
      model: 'Razer Blade 15',
      price: 360000,
      priceDisplay: '360,000৳',
      detail: {
        processor: 'Intel Core i7-11800H',
        memory: '32GB DDR4',
        storage: '1TB SSD (M.2 NVMe)',
        graphics: 'NVIDIA GeForce RTX3080 8GB',
      },
      quantity: 5,
      quantityInitial: 5,
    },
    {
      id: 3,
      imgPath: '../assets/images/product-images/laptop-3.jpg',
      model: 'HP ZBook Fury G7',
      price: 355000,
      priceDisplay: '355,000৳',
      detail: {
        processor: 'Intel Xeon W-10885M',
        memory: '16 GB DDR4-2666',
        storage: '1 TB NVMe M.2 SSD',
        graphics: 'NVIDIA Quadro RTX 3000 6GB',
      },
      quantity: 7,
      quantityInitial: 7,
    },
    {
      id: 4,
      imgPath: '../assets/images/product-images/laptop-4.jpg',
      model: 'Acer Predator PH315-53',
      price: 242000,
      priceDisplay: '242,000৳',
      detail: {
        processor: 'Intel Core i7-10870H',
        memory: '16 GB DDR4',
        storage: '1 TB SSD',
        graphics: 'NVIDIA RTX 3070 8GB DDR6',
      },
      quantity: 41,
      quantityInitial: 41,
    },
    {
      id: 5,
      imgPath: '../assets/images/product-images/laptop-5.jpg',
      model: 'Gigabyte Aorus 15G XC',
      price: 227000,
      priceDisplay: '227,000৳',
      detail: {
        processor: 'Intel Core i7-10870H',
        memory: '32GB (16GBx2) 3200MHz',
        storage: '512GB NVMe PCIe SSD',
        graphics: 'NVIDIA GeForce GDDR6 8GB',
      },
      quantity: 66,
      quantityInitial: 66,
    },
    {
      id: 6,
      imgPath: '../assets/images/product-images/laptop-6.jpg',
      model: 'Acer Predator Helios 300',
      price: 220000,
      priceDisplay: '220,000৳',
      detail: {
        processor: 'Intel Core i7-11800H',
        memory: '32GB DDR4 3200MHz',
        storage: '512GB PCIe SSD, 1TB HDD',
        graphics: 'RTX 3080 Ti 16GB GDDR6',
      },
      quantity: 3,
      quantityInitial: 3,
    },
    {
      id: 7,
      imgPath: '../assets/images/product-images/laptop-7.jpg',
      model: 'ASUS ROG Zephyrus G14',
      price: 200900,
      priceDisplay: '200,900৳',
      detail: {
        processor: 'AMD Ryzen 9 5900HS',
        memory: '16GB DDR4 3200MHz',
        storage: '1TB M.2 NVMe PCIe SSD',
        graphics: 'NVIDIA RTX3060 6GB GDDR6',
      },
      quantity: 8,
      quantityInitial: 8,
    },
    {
      id: 8,
      imgPath: '../assets/images/product-images/laptop-8.jpg',
      model: 'ASUS ROG Strix G15',
      price: 175000,
      priceDisplay: '175,000৳',
      detail: {
        processor: 'AMD Ryzen 7 6800H',
        memory: '16GB DDR5 4800MHz',
        storage: '512GB M.2 NVME SSD',
        graphics: 'NVIDIA RTX 3060 6GB GDDR6',
      },
      quantity: 15,
      quantityInitial: 15,
    },
    {
      id: 9,
      imgPath: '../assets/images/product-images/laptop-9.jpg',
      model: 'Asus TUF Dash F15',
      price: 136000,
      priceDisplay: '136,000৳',
      detail: {
        processor: 'Intel Core i5-11300H',
        memory: '8GB DDR4 3200MHz',
        storage: '512GB M.2 NVME SSD',
        graphics: 'NVIDIA RTX3060 6GB',
      },
      quantity: 18,
      quantityInitial: 18,
    },
  ];

  // productAdded = new EventEmitter<any>();
  productsListChanged = new EventEmitter<any>();

  getProducts() {
    return this.products;
    // return this.products.slice();
  }

  DecreaseProductQuantity(id) {
    let decreased = false;

    this.products.forEach((product) => {
      if (product.id === id) {
        if (product.quantity !== 0) {
          decreased = true;
          product.quantity--;
        }
      }
    });

    return decreased;
  }

  IncreaseProductQuantity(id) {
    let increased = false;

    this.products.forEach((product) => {
      if (product.id === id) {
        if (product.quantity < product.quantityInitial) {
          increased = true;
          product.quantity++;
        }
      }
    });

    return increased;
  }

  addNewProduct(productItemNew) {
    this.products.push(productItemNew);
  }

  deleteProduct(id) {
    let indexToRemove;
    this.products.forEach((product, index) => {
      if (product.id === id) indexToRemove = index;
    });

    this.products.splice(indexToRemove, 1);

    this.productsListChanged.emit();
  }

  updateProduct(updatedProduct) {
    this.products.forEach((product) => {
      if (product.id === updatedProduct.id) {
        product.model = updatedProduct.model;
        product.price = product.priceDisplay = updatedProduct.price;
        product.quantity = updatedProduct.quantity;
      }
    });

    this.productsListChanged.emit();
  }
}
