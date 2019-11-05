# <img src="https://lipis.github.io/flag-icon-css/flags/4x3/be.svg" height="24"> Belgian Municipalities 2019 (Open Data)
This dataset is constructed to provide easy access to data concering the municipalities of Belgium.
This repository provides the following information of Belgium's 581 municipalities:


| Entity Property | Description |
|-|-|
|[**NIS_code**](https://en.wikipedia.org/wiki/NIS_code)|Alphanumeric code for regional areas of Belgium
|**municipality_NL**| [Municipality](https://en.wikipedia.org/wiki/Municipality) name in Dutch
|**municipality_FR**| [Municipality](https://en.wikipedia.org/wiki/Municipality) name  in French
|**arrondissement_NL**| [Arrondissement](https://en.wikipedia.org/wiki/Arrondissement)  name in Dutch
|**arrondissement_FR**| [Arrondissement](https://en.wikipedia.org/wiki/Arrondissement)  name in French
|**province_NL**| [Province](https://en.wikipedia.org/wiki/Province)  name in Dutch
|**province_FR**| [Province](https://en.wikipedia.org/wiki/Province)  name in French
|**region_NL**| [Region](https://www.belgium.be/en/about_belgium/government/regions)  name in Dutch
|**region_FR**| [Region](https://www.belgium.be/en/about_belgium/government/regions)  name in French
|**inhabitants**| Number of inhabitants living in the [Municipality](https://en.wikipedia.org/wiki/Municipality)
|[**zip**](https://en.wikipedia.org/wiki/ZIP_Code)| Postal code of the [Municipality](https://en.wikipedia.org/wiki/Municipality)


## Structure
```bash
├── data
│   ├── {year}
│   │   ├── root.json (Input file to generate all other extensions, make changes on this file only.)
```

## Contribute
Contributing information can be done in the form of pull-requests.
For now, only pull-requests that contain changes in **root.json** files will be considered.
When making pull-requests please state the sources of your information so that they can be validated.
If you spot any errors in the data, please be so kind to notify us with a pull-request with the correct information or by creating an issue.



## Sources
This repository was generated using the following data sources:

-   [Découpages Géographiques](https://statbel.fgov.be/fr/propos-de-statbel/methodologie/classifications/geographie)
-   [Statbel population on 1th of January, 2018](http://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.1%20Structuur%20van%20de%20bevolking/Wettelijke_bevolking_per_gemeente_2011_2017.xls)
-   [rubenv/belgium-zipcodes](https://github.com/rubenv/belgium-zipcodes/blob/master/out/cities.csv)
-   [maartenzam/NIScodes](https://github.com/maartenzam/NIScodes)

