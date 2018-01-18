# scraper-service
Chrome extension for scraping: _SelectorGadget_
## How to call the service
https://scraper-service.herokuapp.com/product/PRODUCT-NAME

## Answer format
        {
        "title": title,
        "price": price,
        "link": "https://www.americanas.com.br" + productLink
        }

### Call example
https://scraper-service.herokuapp.com/product/samsung        

### Answer example


    {
        "title": "Smartphone Samsung Galaxy J7 Prime Dual Chip Android Tela 5.5\" 32GB 4G Câmera 13MP - Dourado",
        "price": "R$989,00",
        "link": "https://www.americanas.com.br/produto/129543938?pfm_carac=samsung%2F&pfm_index=0&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J5 Prime Dual Chip Android 6.0 Tela 5\" Quad-Core 1.4 GHz 32GB 4G Wi-Fi Câmera 13MP com Leitor de Digital - Dourado",
        "price": "R$725,00",
        "link": "https://www.americanas.com.br/produto/132276480?pfm_carac=samsung%2F&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J7 Prime Dual Chip Android 6.0 Tela 5.5\" Octa- Core 1.6 GHz 32GB 4G Câmera 13MP - Rosa",
        "price": "R$989,00",
        "link": "https://www.americanas.com.br/produto/131664641?pfm_carac=samsung%2F&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J5 Pro Dual Chip Android 7.0 Tela 5,2\" Octa-Core 1.6 GHz 32GB 4G Câmera 13MP - Dourado",
        "price": "R$879,00",
        "link": "https://www.americanas.com.br/produto/132390047?pfm_carac=samsung%2F&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J7 Prime Dual Chip Android Tela 5.5\" 32GB  4G Câmera 13MP - Preto",
        "price": "R$959,00",
        "link": "https://www.americanas.com.br/produto/129542708?pfm_carac=samsung%2F&pfm_index=4&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J5 Prime Dual Chip Android 6.0 Tela 5\" Quad-Core 1.4 GHz 32GB 4G Wi-Fi Câmera 13MP com Leitor de Digital - Rosa",
        "price": "R$729,00",
        "link": "https://www.americanas.com.br/produto/132229131?pfm_carac=samsung%2F&pfm_index=5&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J2 Prime TV Dual Chip Android 6.0 Tela 5\" Quad-Core 1.4 GHz 16GB 4G Câmera 5MP - Dourado",
        "price": "R$543,00",
        "link": "https://www.americanas.com.br/produto/131665660?pfm_carac=samsung%2F&pfm_index=6&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy On 7 Dual Chip Android 5.1 Tela 5.5\" 16GB 4G Câmera 13MP - Dourado",
        "price": "R$599,99",
        "link": "https://www.americanas.com.br/produto/129542661?pfm_carac=samsung%2F&pfm_index=7&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy S8 Dual Chip Android 7.0 Tela 5.8\" Octa-Core 2.3GHz 64GB 4G Câmera 12MP - Preto",
        "price": "R$2.899,00",
        "link": "https://www.americanas.com.br/produto/132118431?pfm_carac=samsung%2F&pfm_index=8&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J2 Prime TV Dual Chip Android 6.0 Tela 5\" Quad-Core 1.4 GHz 16GB 4G Cãmera 8MP Rosa",
        "price": "R$543,00",
        "link": "https://www.americanas.com.br/produto/131657512?pfm_carac=samsung%2F&pfm_index=9&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J5 Pro Dual Chip Android 7.0 Tela 5,2\" Octa-Core 1.6 GHz 32GB 4G Câmera 13MP - Preto",
        "price": "R$868,00",
        "link": "https://www.americanas.com.br/produto/132380287?pfm_carac=samsung%2F&pfm_index=10&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J1 Mini Dual Chip Android 5.1 Tela 4\" 8GB 3G Wi-Fi Câmera 5MP - Dourado",
        "price": "R$349,00",
        "link": "https://www.americanas.com.br/produto/125768056?pfm_carac=samsung%2F&pfm_index=11&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J5 Prime Dual Chip Android 6.0 Tela 5\" Quad-Core 1.4 GHz 32GB 4G Wi-Fi Câmera 13MP com Leitor de Digital - Preto",
        "price": "R$729,00",
        "link": "https://www.americanas.com.br/produto/132276640?pfm_carac=samsung%2F&pfm_index=12&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J7 Metal Dual Chip Android 6.0 Tela 5.5\" 16GB 4G Câmera 13MP - Preto",
        "price": "R$879,00",
        "link": "https://www.americanas.com.br/produto/128011681?pfm_carac=samsung%2F&pfm_index=13&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy S7 Android 6.0 Tela 5.1\" 32GB 4G Câmera 12MP - Preto",
        "price": "R$1.799,00",
        "link": "https://www.americanas.com.br/produto/125916485?pfm_carac=samsung%2F&pfm_index=14&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy A9 Dual Chip Android 6.0 Tela 6\" Octa-Core 1.8 Ghz 32GB 4G Câmera 16MP - Preto",
        "price": "R$1.332,22",
        "link": "https://www.americanas.com.br/produto/128682792?pfm_carac=samsung%2F&pfm_index=15&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J7 Pro Android 7.0 Tela 5.5\" Octa-Core 64GB 4G Wi-Fi Câmera 13MP - Dourado",
        "price": "R$1.349,00",
        "link": "https://www.americanas.com.br/produto/132532746?pfm_carac=samsung%2F&pfm_index=16&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy A9 Dual Chip Android 6.0 Tela 6\" Octa-Core 1.8 Ghz 32GB 4G Câmera 16MP - Dourado",
        "price": "R$1.332,22",
        "link": "https://www.americanas.com.br/produto/128722774?pfm_carac=samsung%2F&pfm_index=17&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J7 Metal Dual Chip Android 6.0 Tela 5.5\" 16GB 4G Câmera 13MP - Dourado",
        "price": "R$1.157,10",
        "link": "https://www.americanas.com.br/produto/128010777?pfm_carac=samsung%2F&pfm_index=18&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy A5 Dual Chip Android 6.0 Tela 5.2\" Octa-Core 1.9GHz 32GB 4G Câmera 16MP - Preto",
        "price": "R$1.299,00",
        "link": "https://www.americanas.com.br/produto/130921502?pfm_carac=samsung%2F&pfm_index=19&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy S7 Edge Android 6.0 Tela 5.5\" 128GB 4G Câmera 12MP - Black Piano",
        "price": "R$2.399,99",
        "link": "https://www.americanas.com.br/produto/130945441?pfm_carac=samsung%2F&pfm_index=20&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J7 Pro Android 7.0 Tela 5.5\" Octa-Core 64GB 4G Wi-Fi Câmera 13MP - Azul",
        "price": "R$1.379,00",
        "link": "https://www.americanas.com.br/produto/132532720?pfm_carac=samsung%2F&pfm_index=21&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J2 Prime TV Dual Chip Android 6.0 Tela 5\" Quad-Core 1.4 GHz 16GB 4G Câmera 8MP - Preto",
        "price": "R$559,00",
        "link": "https://www.americanas.com.br/produto/131657539?pfm_carac=samsung%2F&pfm_index=22&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    },
    {
        "title": "Smartphone Samsung Galaxy J1 2016 Dual Chip Android 5.1 Tela 4.5\" 8GB Wi-Fi 3G Câmera 5MP - Dourado",
        "price": "R$444,43",
        "link": "https://www.americanas.com.br/produto/125633434?pfm_carac=samsung%2F&pfm_index=23&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20"
    }

