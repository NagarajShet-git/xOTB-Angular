import { async, ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TreeNodeComponent } from './tree-node.component';
import { FormsModule } from '@angular/forms';



describe('TreeNodeComponent', () => {
  const treeInput = {
    label: 'app',
    checked: false,
    children: [
      {
        label: 'app.component.html',
        checked: false,
        children: []
      }, {
        label: 'app.component.ts',
        checked: false,
        children: []
      }
    ]
  };

  let component: TreeNodeComponent;
  let fixture: ComponentFixture<TreeNodeComponent>;

  let input;
  let star;





  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeNodeComponent],

      imports: [FormsModule]
    })

      .compileComponents();
  }));

  function toggleChildren(node: any) {
    if (node.visible) {
      console.log(node);
     return !node.visible;
    } else if (!node.visible) {
      console.log(node);
      return !node.visible;
    }
      }
function unselect(node) {
  if (node === false) {
   treeInput.children[0].checked = false;
   treeInput.children[1].checked = false;
  } else {
    treeInput.children[0].checked = true;
    treeInput.children[1].checked = true;
  }
  return treeInput.children;
}
function select(node1, node2 ) {

  if (node1 === false && node2 === false) {
    treeInput.checked = false;
  } else if (node1 === false || node2 === true) {
    treeInput.checked = true;
  } else {
    treeInput.checked = true;
  }
  return treeInput.checked;
}
  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeComponent);
    component = fixture.componentInstance;
    component.node = treeInput;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Click Checkbox', () => {
    beforeEach(() => {
      input = fixture.debugElement.query(By.css('.check')).nativeElement;
      fixture.detectChanges();
    });
    it('--- parent select should select all children', () => {
      input.click();
      console.log('--- parent select should select all children----');
      console.log('parent checkbox is checked ------->', input.checked);

        console.log('child one is checked------>', treeInput.children[0].checked );
        console.log('child two is checked------>', treeInput.children[1].checked);
      expect(treeInput.children[0].checked).toBeTruthy();
        expect(treeInput.children[1].checked).toBeTruthy();


    });
    it('-----parent unselect should unselect all children', () => {
      console.log('--- parent unselect should unselect all children----');
      console.log('parent checkbox is checked ------->', input.checked);
       const value = unselect(input.checked);
        console.log('child one is checked----->', value[0].checked );
        console.log('child two is checked------>', value[1].checked );
      expect(value[0].checked).toBeFalsy();
        expect(value[1].checked).toBeFalsy();

    });
    it('------select all children should select parent', () => {
      const value = select(treeInput.children[0].checked = true, treeInput.children[0].checked = true);
      console.log('select all children should select parent ------->', value);
      expect( value).toBeTruthy();
    });
    it('---------unselect all children should unselect parent', () => {
      const value = select(treeInput.children[0].checked = false, treeInput.children[0].checked = false);
            console.log('unselect all children should unselect parent ------->', value);
            expect( value).toBeFalsy();

    });
     it('partially selecting children should show partial select icon', () => {
      const value = select(treeInput.children[0].checked = false, treeInput.children[0].checked = true);
            console.log('select partial children should show indeterminate  ------->', value);
            expect( value).toBeTruthy('partially selected');

  });
});
  describe('toggle image ', () => {

    beforeEach(() => {
      star = fixture.nativeElement.querySelector('.star');
    });

    it('Should show and hide children when toggle option is clicked', fakeAsync(() => {
      star.click();
      fixture.detectChanges();
       const visible = toggleChildren(treeInput);
       console.log(visible);
       expect(visible).toBe(false);
       star.click();
      fixture.detectChanges();
       const notvisible = toggleChildren(treeInput);
       console.log(notvisible);
       expect(notvisible).toBe(true);
     }));
it('should expand node children on click', () => {
  star.click();
  console.log(star);
  fixture.detectChanges();
  expect(treeInput.children).toBeTruthy();
});

it('should collapse node children on click', () => {
  star.click();
  console.log(star);
  fixture.detectChanges();
  expect(treeInput.children).toBeTruthy();
  });

  });

  describe('output display of selectednode', () => {

    beforeEach(() => {
      input = fixture.debugElement.query(By.css('.check')).nativeElement;
      fixture.detectChanges();
    });

    it('should emit on click', () => {
      // spy on event emitter
      spyOn(component.selectEvents, 'emit');
      // trigger the click
      input.click();
      fixture.detectChanges();
      expect(component.selectEvents.emit).toHaveBeenCalledWith(component.node);
   });

  });
});
