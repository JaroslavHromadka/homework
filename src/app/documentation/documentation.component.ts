import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
  title = 'Dokumentace';

  popis = [
    {
      task: '1. vytvořte jednoduchou tabulku, která zobrazí data ze zdroje https://jsonplaceholder.typicode.com/todos',
      p: 'Načítání probíhá v list.service a načtená data se zobrazují pomocí componenty list'
    },
    {
      task: '2. u sloupečku userId proveďte konverzi a zobrazte zde text: 1 : "admin"     2 : "tester"     všechny další : "neznámý uživatel"',
      p: 'Konverze probíhá pomocí pipe user-id'
    },
    {
      task: '3. do tabulky přidejte CRUD operace (vytvoření nového záznamu, editaci, smazání záznamu). ',
      p: 'K přidání nebo opravě uživatele slouží user componenta. Samotná změna záznamu probíhá v service list'
    },
    {
      task: '4. na sloupec "title" přidejte možnost sestupného a vzestupného řazení',
      p: 'K řazení slouží pipe sort-title. Samotné řazení se mění při kliknutí na nadpis sloupce title, přičemž je možno se vrátit k původnímu řazení, tedy dle id.'
    }]
}
