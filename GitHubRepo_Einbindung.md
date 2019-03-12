<h1>Github-Repository in Youtrack einbinden</h1>
<p>
    Zuerst muss man in das Projekt gehen, zu welchem man ein Github-Repo einbinden möchte. Anschließend muss man rechts unter Administration auf VCS gehen.
</p>
<img src="./images/vcs.png" width="30%">
<p>
    Danach klickt man auf "New VCS Integration" und es öffnet sich ein Fenster. In diesem Fenster wählt man als Server Type: GitHub aus, als Repository URL fügt man den Link seines GitHub-Repos ein und als Personal access token den Token des GitHub-Repos. Falls man noch keinen Token hat, kann man darunter auf Generate token klicken, um direkt einen Token zu erstellen.
</p>
<img src="./images/vcsIntegration.png" width="50%">
<p>
    Um den Token zu erstellen gibt man nur die Token Description ein, alles andere kann so bleiben wie es ist. Dann klickt man auf Generate Token.
</p>
<img src="./images/token.jpg" width="80%">
<p>
    Nachdem man den Token erstellt hat, kommt eine langer Code für den Token. Diesen Code kopiert man in das dafür vorgesehene Feld bei der VCS Integration. 
</p>
<img src="./images/tokenNr.jpg" width="70%">
<p>
    Anschließend kann man die neue VCS Integration speichern.<br><br>
</p>
<h2>Fehler</h2>
<p>
    Bei uns tritt jedoch der Fehler "HTTP 403 Forbidden" auf. Im Internet steht, dass man diesen Fehler mit einem SSH-Key beheben kann. Diesen Key können wir jedoch nicht erstellen, da wir dazu keine Berechtigungen haben.
</p>
<img src="./images/mistake1.png" width="50%">
