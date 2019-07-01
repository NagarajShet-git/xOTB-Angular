import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';


export interface TreeNode {

 label: string;
 checked: boolean;
 children: TreeNode[];

 }

@Component({
changeDetection: ChangeDetectionStrategy.OnPush,
selector: 'app-indetermine-tree',
templateUrl: './indeterminate-tree-structure.component.html',
styleUrls: [ './indeterminate-tree-structure.component.css' ],
encapsulation: ViewEncapsulation.Emulated

})

export class IndetreeComponent implements OnInit {
Title = 'IndeterminateTree';
public tree: TreeNode;
public selectedTreeNode: TreeNode | null;
public output = false;
ngOnInit() {
  this.tree = {
    label: 'TreeStructure',
    checked: false,
    children: [
        {
         label: 'src',
          checked: false,
          children: [
                  {
                  label: 'app',
                   checked: false,
                   children: [
                             {
                      label: 'app.component.html',
                      checked: false,
                      children: []
                             },
                             {
                              label: 'app.component.ts',
                              checked: false,
                              children: []
                          },
                          {
                            label: 'app.component.css',
                            checked: false,
                            children: []
                        },

                   {
                       label: 'tree-node',
                       checked: false,
                       children: [
                                  {
                          label: 'tree-node.component.html',
                          checked: false,
                          children: []
                                   },
                                   {
                                    label: 'tree-node.component.ts',
                                    checked: false,
                                    children: []
                                },
                                {
                                  label: 'tree-node.component.css',
                                  checked: false,
                                  children: []
                              },
                   ]
                   },
                  ]

                },
                   ]
        },

        {

         label: 'assets',
        checked: false,
        children: [
                  {
                  label: '.gitkeep',
                  checked: false,
                  children: []
                  },

                  ]
        },
        {
          label: 'environments',
          checked: false,
          children: [
            {
              label: 'environment.prod.ts',
              checked: false,
              children: []
              },
              {
                label: 'environment.ts',
                checked: false,
                children: []
                }
          ]
        },
        {
           label: 'index.html',
           checked: false,
           children: []

        }
             ],
             };
}
constructor() {}

public handleSelection( node: TreeNode ): void {
  this.output = true;
  this.selectedTreeNode = node;
  console.group( 'Selected Tree Node' );
  console.log( 'Label:', node.label );
  console.log( 'Children:', node.children.length );
  }
}
