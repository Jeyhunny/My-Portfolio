function downloadDocument() {
	// İndirme işlemi için kullanılacak belgenin URL'sini belirtin
	var documentUrl = "file:///C:/Users/Ceyhun/Desktop/unfold-master/Cv.pdf";

	// Bir bağlantı öğesi oluşturun ve indirme işlemi için kullanılan URL'yi belirtin
	var documentUrl = "file:///C:/Users/Ceyhun/Desktop/unfold-master/Cv.pdf";
	var link = document.createElement("Cv.pdf");
	link.href = documentUrl; "file:///C:/Users/Ceyhun/Desktop/unfold-master/Cv.pdf";

	// İndirme işlemi için kullanılacak dosyanın adını belirtin
	link.download = "Cv.pdf";

	// Bağlantıyı tıklama işlemi yapın (indirme başlatılacaktır)
	link.click();
}
