let elemento;

elemento = document; // Asigna todo el objeto Documento HTML a "elemento"

elemento = document.all; // Asigna una HTMLCollection de todos los elementos del documento a "elemento". Nota: document.all se considera obsoleto.

elemento = document.head; // Asigna el elemento <head> del documento a "elemento"

elemento = document.body; // Asigna el elemento <body> del documento a "elemento"

elemento = document.domain; // Asigna el nombre de dominio del servidor que cargó el documento a "elemento"

elemento = document.forms; // Asigna una colección de todos los elementos <form> del documento a "elemento"

elemento = document.forms[0]; // Asigna el primer elemento <form> del documento a "elemento"

elemento = document.forms[0].id; // Asigna el valor de "id" del primer elemento <form> del documento a "elemento"

elemento = document.forms[0].method; // Asigna el valor de "method" del primer elemento <form> del documento a "elemento"

elemento = document.forms[0].classList; // Asigna la lista de clases del primer elemento <form> del documento a "elemento"  

elemento = document.forms[0].action; // Asigna el valor de "action" del primer elemento <form> del documento a "elemento"   

elemento = document.links; // Asigna una HTMLCollection de todos los elementos <a> del documento a "elemento"

elemento = document.links[4]; // Asigna el primer elemento <a> del documento a "elemento"

elemento = document.links[4].classList;

elemento = document.links[4].className;

elemento = document.images; // Asigna una HTMLCollection de todos los elementos <img> del documento a "elemento"

elemento = document.scripts; // Asigna una HTMLCollection de todos los elementos <script> del documento a "elemento"



console.log(elemento);