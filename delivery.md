# Delivery exercise
Si implementi nel linguaggio di propria scelta tra NodeJs e C#, uno script da eseguire da linea di comando.
Si possono usare librerie di terze parti a vostro piacimento.
Lo script riceve in input il percorso di un file csv da importare, un numero di colonna nel quale cercare, una chiave di ricerca.
Lo script dovrà essere così invocato (esempio in PHP)

```console
$ php src/search.php ./file.csv 2 Alberto
```

dove ```./file.csv``` è il percorso di un file csv così formattato:

```
1,Rossi,Fabio,01/06/1990;
2,Gialli,Alessandro,02/07/1989;
3,Verdi,Alberto,03/08/1987;
```

Il numero 2 rappresenta l'indice di colonna in cui cercare (nel file precedente il nome)
```Alberto``` rappresenta la chiave di ricerca.

L'output del comando deve essere la linea corrispondente, nel nostro caso:

```3,Verdi,Alberto,03/08/1987;```
