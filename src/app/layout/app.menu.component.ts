import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Network',
                items: [
                    { label: 'Forum', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Connections', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Messages', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Employee',
                items: [
                    { label: 'Your Profile', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Profile Viewers', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Resume Builder', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Cover Letter Builder', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/tree'] },
                    { label: 'Motivation Letter Builder', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/panel'] },
                    { label: 'Find A Job', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/panel'] },
                ]
            },
            {
                label: 'Employer',
                items: [
                    { label: 'Post A Job', icon: 'pi pi-fw pi-eye', routerLink: ['/uikit/tree'] },
                    { label: 'Skill Tree Builder', icon: 'pi pi-fw pi-eye', routerLink: ['/uikit/tree'] },
                    { label: 'Exam Builder', icon: 'pi pi-fw pi-globe', routerLink: ['/uikit/panel'] },
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Account', icon: 'pi pi-fw pi-eye', routerLink: ['/uikit/tree'] },
                    { label: 'Manage Billing', icon: 'pi pi-fw pi-eye', routerLink: ['/uikit/tree'] },
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            }
        ];
    }
}
