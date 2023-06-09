
Pentru a naviga in aplicatie am folosit react-router-dom.
Initial, userul este intampinat de paginile de register si login, existand pe fiecare un buton catre cealalta in functie de nevoi.
Ambele au cate o componenta, Login, respectiv Register in folderul **pages**. In cadrul fiecareia se afiseaza un anumit tip de form, din folderul **components**.
In urma apasarii butonului de login / register, se face un **POST** catre backend cu datele primite.

Odata ajuns pe pagina de Home, userul poate apasa fie pe butonul Trends unde i se afiseaza 3 sectiuni: albume, melodii si artisti. Acesta poate sa le dea inimoara (se adauga ca favorite) sau play (se adauga ca ultimele ascultate). Entitatile carora li s-a dat inimioara sunt salvate in baza de date.

Prin apasarea pe butonul Profile (accesibil si din coltul dreapta sus) userul poate sa isi acceseze profilul unde isi poate schimba usernameul si sa vada tot 3 sectiuni ca la Trends, dar cu albumele, artistii, melodiile la care a dat el inimioara. Prin butoanele de Enhance, se face un request catre backend prin care se analizeaza comportamentul userului (ce i-a placut pana acum sa asculte) si se adauga in acea lista, entitatile adaugate avand si un icon apare de steluta.

Prin apasarea butonului Random Playlist, userul primeste o pagina cu melodii random din baza de date. 

In navbar, daca se apasa iconul de search, userul va putea scrie in acel input ceea ce doreste sa caute si i se vor afisa rezultatele din baza de date care corespund cu informatiile de cautare. 
