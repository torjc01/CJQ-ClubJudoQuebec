import { Component } from '@angular/core';

@Component({
  selector: 'cjq-root', 
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <img
        width="40"
        alt="Logo"
        src="../assets/images/Logo.png"
      />

      <a class='navbar-brand'> {{pageTitle}} </a>
      <ul class="nav nav-pills">
        <li><a class='nav-link' routerLink="/welcome">Home</a></li>
        <li><a class='nav-link' routerLink="/club">Le Club</a></li>
        <li><a class='nav-link' routerLink="/judo">Judo</a></li>
        <li><a class='nav-link' routerLink="/cours">Cours</a></li>
        <li><a class='nav-link' routerLink="/equipe">Équipe Compétition</a></li>
        <li><a class='nav-link' routerLink="/equipement">Équipement</a></li>
      </ul>
      <div class="spacer"></div>
      <a class='nav-link' routerLink="/gestion">Acess restreint</a>
    </nav>
    <div class="container">
      <router-outlet>
      </router-outlet>
    </div>
    <footer class="footer mt-auto py-3 bg-light" style="margin-top:100px">
      <div class="container">
        <span class="text-muted">
          <div class="text-center">@juliozohar</div>
          <div class="text-center">
            &copy; 2021  <a href="http://github.com/torjc01">github.com/torjc01</a>
          </div>
        </span>

      </div>
    </footer>
  `
})
export class AppComponent {
  title = 'cjq-frontend';
  pageTitle = "Club de Judo de Quebec";
}




/*  
<footer class="footer mt-auto py-3 bg-light">
    <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
    </div>
</footer>
*/