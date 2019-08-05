function Node(key, value) {
    this.key = key;
    this.value = value;

    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this._root = null;

    this.root=function () {
        return (this._root) ? this._root.value : null;
    };

    this.insert=function(key, value, tree=this._root){
        if (!this._root) {this._root=new Node(key, value); return;}

        if (key < tree.key) {
            if (tree.left) {
                this.insert(key,value,tree.left);
            } else {
                tree.left=new Node(key,value);
            }
        } else {
            if (tree.right) {
                this.insert(key, value, tree.right);
            } else {
                tree.right=new Node(key,value);
            }
        }
        return this;
    };

    this.search=function(key,tree = this._root){
        if (!tree) {return}

        if (tree.key === key) {return tree.value;}

        if (key < tree.key) {
            return this.search(key, tree.left);
        } else {
            return this.search(key, tree.right);
        }
    };

    this.update=function(key, value, tree = this._root){
        if (!tree) {return}

        if (tree.key === key) {return tree.value = value;}

        if (key < tree.key) {
            return this.update(key, tree.left);
        } else {
            return this.update(key, tree.right);
        }
    };

    this.delete=function(key){

        function getMin(node) {
            while(node.left){node=node.left}
            return {key: node.key, value: node.value};
        }
        const remove=function (key,tree) {
            if (!tree) {return}
            if (key===tree.key) {
                if (!tree.left && !tree.right){return}
                if (!tree.left) {return tree.right}
                if (!tree.right) {return tree.left}

                const t=getMin(tree.right);
                tree.key=t.key;
                tree.value=t.value;
                tree.right=remove(key, tree.right);
                return tree;
            } else if (key<tree.key) {
                tree.left=remove(key,tree.left);
                return tree;
            } else {
                tree.right=remove(key,tree.right);
                return tree;
            }
        };
        this._root=remove(key, this._root);
        return this;
    };

   this.contains=function(value){
       let b=false;
       const cont=function (key,tree){
           if (tree){
                cont(key,tree.left);
                if(key === tree.value) {
                    b=true;
                    return;
                }
                cont(key,tree.right);
           }
       };
       cont(value,this._root);
       return b;
   };

    this.verify=function(){
        let b=true;
        const cont=function (tree){
            if (tree!==null && tree.left!==null && tree.right!==null){
                if (tree.left.key<tree.key) {
                    cont(tree.left);
                } else b=false;

                if (tree.right.key>tree.key) {
                    cont(tree.right);
                } else b=false;
            }
        };
        cont(this._root);
        return b;
    };

    this.inOrder = function(node) {
        if(node) {
            let x=[node.value].concat(this.inOrder(node.right));
            return this.inOrder(node.left).concat(x);
        }
        else return [];
    };

    this.traverse=function(order){
        let mas=this.inOrder(this._root);
        if (!order) {mas.reverse();}
        return mas;
    };
}

export default BinarySearchTree;
