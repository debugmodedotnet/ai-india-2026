import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  mobileMenuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    const storedTheme = window.localStorage.getItem('aii-theme');

    if (storedTheme === 'dark' || storedTheme === 'light') {
      this.isDarkMode = storedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDark;
    }

    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    window.localStorage.setItem('aii-theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.body;

    if (this.isDarkMode) {
      body.classList.add('theme-dark');
    } else {
      body.classList.remove('theme-dark');
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
    const hamburger = document.querySelector('.navbar-toggler') as HTMLElement;
    const hamburgerIcon = document.querySelector('.burger') as HTMLElement;

    if (this.mobileMenuOpen) {
      hamburger.className = "navbar-toggler border-0 opened"
      hamburgerIcon.className = "burger isOpened"
      mobileMenu.style.visibility = 'visible';
      mobileMenu.style.opacity = '1';
      mobileMenu.style.right = '0';
    } else {
      hamburger.className = "navbar-toggler border-0 closed"
      hamburgerIcon.className = "burger isClosed"
      mobileMenu.style.visibility = 'hidden';
      mobileMenu.style.opacity = '0';
      mobileMenu.style.right = '-100%';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
    mobileMenu.style.visibility = 'hidden';
    mobileMenu.style.opacity = '0';
    mobileMenu.style.right = '-100%';

    const hamburger = document.querySelector('.navbar-toggler') as HTMLElement;
    hamburger.className = "navbar-toggler border-0 closed";
    const hamburgerIcon = document.querySelector('.burger') as HTMLElement;
    hamburgerIcon.className = "burger isClosed";
  }

}
