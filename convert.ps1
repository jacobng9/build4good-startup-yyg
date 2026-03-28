$word = New-Object -ComObject Word.Application
$word.Visible = $false
$docPath = "c:\Users\Preston Nguyen\Documents\yyg_hackers\build4good-startup-yyg\Finch_PRD.docx"
$txtPath = "c:\Users\Preston Nguyen\Documents\yyg_hackers\build4good-startup-yyg\Finch_PRD.txt"
$doc = $word.Documents.Open($docPath)
$doc.SaveAs($txtPath, 2)
$doc.Close()
$word.Quit()
Write-Host "Done"
