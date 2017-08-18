/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterOutletStubComponent, RouterLinkStubDirective } from '../../testing/router-stubs';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
    let fixture: ComponentFixture<AboutComponent>;
    let comp: AboutComponent;

    let urlSeg: UrlSegment;
    let list: UrlSegment[];
    let url: BehaviorSubject<UrlSegment[]>;

    let linkDes: any;
    let links: any;

    let compiled: any;
    let text: string;

    beforeEach(async(() => {
        urlSeg = new UrlSegment('community', {});
        list = [urlSeg];
        url = new BehaviorSubject(list);

        TestBed.configureTestingModule({
            declarations: [AboutComponent, RouterLinkStubDirective],
            providers: [
                { provide: ActivatedRoute, useValue: { url: url } }
            ],
            schemas: [NO_ERRORS_SCHEMA]  // this ensures it doesnt error on routerLink usage
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent);
        comp = fixture.componentInstance; // AboutComponent test instance

        fixture.detectChanges(); // initial binding
    });

    it('Has Communities around Reuse Header', () => {
        headerTextTest('Communities around Reuse');
    });

    it('Can get RouterLinks from Communities around Reuse template', () => {
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
        links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

        expect(links.length).toBe(3, 'should have 3 links');

        const consumingLink = links[0];
        const contributingLink = links[1];
        const creatingLink = links[2];

        expect(consumingLink.linkParams).toEqual(['/about/consuming']);
        expect(contributingLink.linkParams).toEqual(['/about/contributing']);
        expect(creatingLink.linkParams).toEqual(['/about/creating']);
    });

    it('Has Consuming Header', () => {
        comp.page = 'consuming';
        fixture.detectChanges();
        headerTextTest('Consuming Reusable Assets');
    });

    it('Has Contributing Header', () => {
        comp.page = 'contributing';
        fixture.detectChanges();
        headerTextTest('Contributing to a Reusable Asset');
    });

    it('Has Creating Header', () => {
        comp.page = 'creating';
        fixture.detectChanges();
        headerTextTest('Creating a Reusable Asset');
    });

    it('Can get RouterLinks from Catalog template', () => {
        comp.page = 'catalog';
        fixture.detectChanges();
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
        links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

        expect(links.length).toBe(2, 'should have 2 links');

        const creatingLink = links[0];
        const consumingLink = links[1];

        expect(consumingLink.linkParams).toEqual(['/about/consuming']);
        expect(creatingLink.linkParams).toEqual(['/about/creating']);
    });

    function headerTextTest(expectedHeaderText) {
        compiled = fixture.debugElement.nativeElement;
        text = compiled.querySelector('h2').textContent;
        expect(text).toContain(expectedHeaderText);
    }
});
