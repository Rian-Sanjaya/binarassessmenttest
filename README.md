Assessment test from Binar Academy.

Preview link: https://rawgit.com/Rian-Sanjaya/binarassessmenttest/master/index.html

Saya mengalami kesulitan dengan pengunaan api yang di referensikan. Saya kurang paham apakah saya yang kurang mengerti dengan pengunaannya.

Url sistem backend yang di referensikan https://test-binar.herokuapp.com hasilnya http error 404 Page not found.

Begitu juga url yang ada di dalam dokumentasi service api https://testbinar.docs.apiary.io/ , production url  http://polls.apiblueprint.org/ juga juga menghasilkan page not found.

Akhirnya saya memakai mock server url http://private-anon-8f122477b6-testbinar.apiary-mock.com/v1/products dan mendapatkan json data, tapi sepertinya hanya sample data saja. 

1. Desain halaman saya buat semirip mungkin.

2. Layanan antar muka yang dibuat:
a. Index / Product List
b. Show product
c. Create product (hanya layanan antar muka dengan form input, fungsi create belum berjalan karena kurang paham dengan api yang disediakan))
d. Update product (hanya layanan antar muka dengan form input, fungsi edit belum berjalan karena kurang paham dengan api yang disediakan))
e. Delete product (hanya menampilkan modal, fungsi delete belum berjalan karena kurang paham dengan api yang disediakan)
f. Login tidak dibuat, karena fungsi api yang belum dipahami, untuk layanan antar muka seharusnya sama seperti create product yang mengunakan form input
g. Crate user tidak dibuat, arena fungsi api yang belum dipahami, untuk layanan antar muka seharusnya sama seperti create product yang mengunakan form input

4. Kekurangan sepertinya harus ada layanan antar muka untuk edit product, sebelum update product. Juga referensi api https://testbinar.docs.apiary.io/ sepertinya tidak berjalan untuk production url.

