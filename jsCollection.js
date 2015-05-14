/**
This is a Collection Franmework in Javascript, can be used publicly.
askeralim@gmail.com
http://askeralim.blogspot.com
http://linkedin.com/in/askeralim
@module Collection
 */
var Collection = Collection || {};
/**
* `TYPE` is stored as a type of collection object.
    * @property TYPE
    * @static
    * @final
    * @type Array
*/
Collection.TYPE = Collection.TYPE ||{};
Collection.TYPE.STACK = "Stack";
Collection.TYPE.ARRAYLIST = "ArrayList";
Collection.TYPE.HASHMAP = "HashMap";
Collection.TYPE.SET = "Set";
Collection.TYPE.QUEUE = "Queue";
Collection.TYPE.TREE = "Tree";


	/**
	@class Stack
	 */
	Collection.Stack = 	function () {
		/**
		 * @property stack
		 * @type Array
		 * @private
		 */
		this._stac = [];
	};
	/**
	 * Pops up one of a given item from the Stack, 
	 *
	 * @method pop
	 * @return item {Object} pushed the last
	 */
	Collection.Stack.prototype.pop = function() {
		return this._stac.pop();
	};
	/**
	 * Adds one of a given item to the Stack, 
	 *
	 * @method push
	 * @param item {Object} An `Item` Object
	 * @chainable
	 */
	Collection.Stack.prototype.push = function(item) {
		this._stac.push(item);
		return this;
	};
	/**
	 * Check whether the stack is empty, 
	 *
	 * @method isEmpty
	 * @return True/False {Boolean} about the stack
	 */
	Collection.Stack.prototype.isEmpty = function() {
		return this._stac.length == 0;
	};
	/**
	 * Returns the Object Type 
	 *
	 * @method objType
	 * @return Collection.TYPE.STACK
	 */
	Collection.Stack.prototype.objType = function(){
		return Collection.TYPE.STACK;
	};
	
	/**
	@class Queue
	 */
	Collection.Queue = 	function () {
		/**
		 * @property _queue
		 * @type Array
		 * @private
		 */
		this._queue = [];
	};
	/**
	 * Adds up one of a given item to the Queue, 
	 *
	 * @method add
	 * @param item
	 * @return item {Object} pushed the last
	 * @chainable
	 */
	Collection.Queue.prototype.add = function(item) {
		this._queue.unshift(item);
		return this;
	};

	/**
	 * Remove one item from the Queue, 
	 *
	 * @method remove
	 * @return item {Object} at the top of the Queue
	 */
	Collection.Queue.prototype.remove = function() {
		return this._queue.pop();;
	};
	/**
	 * Remove one item from the Queue, 
	 *
	 * @method isEmpty
	 * @return True/False check whether the Queue is empty
	 */
	Collection.Queue.prototype.isEmpty = function(){
		return this._queue.length == 0;
	},
	/**
	 * Remove one item from the Queue, 
	 *
	 * @method size
	 * @return size {Number} number of items present in the Queue
	 */
	Collection.Queue.prototype.size = function(){
		return this._queue.length;
	},
	/**
	 * Returns all the elements from the Queue ans an Array[], 
	 *
	 * @method getElements
	 * @return Array {Array} returns all teh elements in the Queue
	 */
	Collection.Queue.prototype.getElements = function(){
		return this._queue;
	},
	/**
	 * Checks whether the given item is present in the queue
	 *
	 * @method contains
	 * @param item
	 * @return item {Object} at the top of the Queue
	 */
	Collection.Queue.prototype.contains = function(item){
		for(var i=0; i< this._queue.length; i++){
			if(this._queue[i]==item)
				return true;
		}
	},
	/**
	 * Returns the Object Type 
	 *
	 * @method objType
	 * @return Collection.TYPE.QUEUE
	 */
	Collection.Queue.prototype.objType = function(){
		return Collection.TYPE.QUEUE;
	},
	/**
	 * Create a clone of the Queue, it clones its elements as well if it is supported clone method.
	 *
	 * @method clone
	 * @return Queue {Collection.Queue} Cloning of the existing Queue
	 */
	Collection.Queue.prototype.clone=function(){
		var cloneQueue = Collection.Queue();
		var elements = this.getElements();
		for(var i=elements.length-1; i>=0; i--){
			if(elements[i].clone)
				cloneQueue.add(elements[i].clone());
			else
				cloneQueue.add(elements[i]);
		}
		return cloneQueue;
	}
			
	/**
	@class ArrayList
	 */
	Collection.ArrayList = 	function () {
		/**
		 * @property _arr
		 * @type Array
		 * @private
		 */
		this._arr = [];
	};
	/**
	 * Adds up one of a given item to the ArrayList, 
	 *
	 * @method add
	 * @param item
	 * @return item {Object} pushed the last
	 * @chainable
	 */
	Collection.ArrayList.prototype.add = function(item) {
		this._arr.push(item);
	};
	/**
	 * Adds up all the given items in [] to the ArrayList, 
	 *
	 * @method addAll
	 * @param items {Array[]}
	 * @return {Object} item added at the last.
	 * @chainable
	 */
	Collection.ArrayList.prototype.addAll = function(items) {
		for(var i=0; i< items.length; i++)
			this.add(items[i]);
		return this;
	};
	/**
	 * Adds up all the given items in [] to the ArrayList, 
	 *
	 * @method addAll
	 * @param item
	 * @return {Index} index of the provided item.
	 */
	Collection.ArrayList.prototype.indexOf = function(item) {
		return this._arr.indexOf(item);
	};
	/**
	 * Checks whether the given item is present in the ArrayList
	 *
	 * @method contains
	 * @param item
	 * @return {Boolean} checks whether the given item present in the ArrayList
	 */
	Collection.ArrayList.prototype.contains = function(item){
		return this._arr.indexOf(item) != -1;
	};
	/**
	 * Checks whether the given item is present in the ArrayList
	 *
	 * @method remove
	 * @param item
	 * @return removes the item if it is exists in the ArrayList
	 * @chainable
	 */
	Collection.ArrayList.prototype.remove = function(item) {
		if (this._arr.indexOf(item) >= 0)
			this._arr.splice(this._arr.indexOf(item), 1);
		return this;
	};
	/**
	 * Checks whether the given item is present in the ArrayList
	 *
	 * @method size
	 * @return {Number} returns the size of the  ArrayList
	 */
	Collection.ArrayList.prototype.size = function(){
		return this._arr.length;
	};
	
	/**
	 * get the item from the ArrayList at the index provided
	 *
	 * @method get
	 * @param index
	 * @return {Item} returns the item at the index
	 */
	Collection.ArrayList.prototype.get  = function(index){
		return this._arr[index];
	};
	/**
	 * Set the item to the ArrayList at the index provided
	 *
	 * @method set
	 * @param index
	 * @param item
	 * @return {Item} returns the item at the index
	 * @chainable
	 */
	Collection.ArrayList.prototype.set = function(index, item){
		if(index<0) throw "Index out of bound exception";
		this._arr[index]=item;
		return this;
	};
	/**
	 * Returns all the elements from the ArrayList ans an Array[], 
	 *
	 * @method getElements
	 * @return Array {Array} returns all teh elements in the ArrayList
	 */
	Collection.ArrayList.prototype.getElements = function(){
		return this._arr;
	};
	/**
	 * Returns the Object Type 
	 *
	 * @method objType
	 * @return Collection.TYPE.ARRAYLIST
	 */
	Collection.ArrayList.prototype.objType = function(){
		return Collection.TYPE.ARRAYLIST;
	},
	/**
	 * Returns the String format of the Object, recursively call the toString of the elements
	 *
	 * @method toString
	 * @return {Collection.TYPE.ARRAYLIST}
	 */
	Collection.ArrayList.prototype.toString = function(){
		return "["+this._arr.join()+"]";
	},
	/**
	 * Returns the String formatted JSON data of the ArrayList
	 *
	 * @method json
	 * @return {JSON}
	 */
	Collection.ArrayList.prototype.json = function(){
		var jsonArr=[];
		for(var i=0; i<this._arr.length; i++){
		  jsonArr.push(this._arr[i].json());
		}
		return JSON.stringify(jsonArr);
	};
	/**
	 * Create a clone of the ArrayList, it clones its elements as well if it is supported clone method.
	 *
	 * @method clone
	 * @return ArrayList {Collection.ArrayList} Cloning of the existing ArrayList
	 */
	Collection.ArrayList.prototype.clone = function(){
		var cloneList = Collection.ArrayList();
		var elements = this.getElements();
		for(var i=0; i<elements.length; i++){
			if(elements[i].clone)
				cloneList.add(elements[i].clone());
			else
				cloneList.add(elements[i]);
		}
		return cloneList;
	};
	
	/**
	@class HashMap
	*/
	Collection.HashMap = 	function () {
		/**
		 * @property _keys
		 * @type Array
		 * @private
		 */
		this._keys = [];
		/**
		 * @property _values
		 * @type Array
		 * @private
		 */
		this._values = [];
	};
	/**
	 * Insert key value pair data to the HashMap, If key exists then the value will be replaced.
	 * Support Array as Key, if key is an Array, It will do deep checking with array. 
	 *
	 * @method put
	 * @param key
	 * @param value
	 * @chainable
	 */
	Collection.HashMap.prototype.put = function(key, val) {
		if(key instanceof Array){
			var found = false;
			for(var i=0; i< this._keys.length; i++){
				if(ArrayCompare(this._keys[i], key)){
					this[this._keys[i]] = val;
					found = true;
					break;
				}
			}
			if(!found){
				this._keys.push(key);
				this._values[key] = val;	
			}
		}else{
			if(this._keys.indexOf(key) == -1)
				this._keys.push(key);
			this._values[key] = val;
		}
		return this;
	};
	/**
	 * returns the value associated with the key,
	 * Support Array as Key, if key is an Array, It will do deep checking with array. 
	 *
	 * @method get
	 * @param key
	 * @return item {Object} pushed the last
	 */
	Collection.HashMap.prototype.get = function(key) {
		if(key instanceof Array){
			for(var i=0; i< this._keys.length; i++){
				if(ArrayCompare(this._keys[i],key)){
					return this._values[this._keys[i]];
				}
			}
		}else{
			return this[key];
		}
	};
	/**
	 * returns All teh keys[] in the Hashmap,
	 *
	 * @method getKeys
	 * @return {Array[]} An Array[] of the keys in the HashMap
	 */
	Collection.HashMap.prototype.getKeys = function(){
		return this._keys;
	};
	/**
	 * Removed a specific item from HashMap
	 *
	 * @method remove
	 * @param key
	 * @chainable
	 * @return {Array[]} An Array[] of the keys in the HashMap
	 */	
	Collection.HashMap.prototype.remove = function(key){
		var index = this._keys.indexOf(key);
		this._values.put(this._keys,null);
		this._keys.splice(index,1);
		return this;
	},
	/**
	 * checks whether the given key is present in the HashMap
	 *
	 * @method remove
	 * @param key
	 * @return {Boolean} True or False if exists or not.
	 */	
	Collection.HashMap.prototype.containsKey = function(key){
		return this._keys.indexOf(key) != -1;
	};
	/**
	 * Returns the Object Type 
	 *
	 * @method objType
	 * @return Collection.TYPE.HASHMAP
	 */
	Collection.HashMap.prototype.objType=function(){
		return Collection.TYPE.HASHMAP;
	};
	/**
	 * Not Supported for HashMap
	 *
	 * @method clone
	 * @return Exception
	 */
	Collection.HashMap.prototype.clone=function(){
		throw "HashMap - Clone functionality not implemented";
	}
	
	/**
	@class Set
	*/
	Collection.Set = 	function () {
		/**
		 * @property _elements
		 * @type Array
		 * @private
		 */
		this._elements = [];
	};
	/**
	 * Add an item to set 
	 *
	 * @method add
	 * @param item
	 * @chainable
	 */
	Collection.Set.prototype.add = function(item) {
		if(this._elements.indexOf(item) == -1)
			this._elements.push(item);
	},
	/**
	 * Add an item to set 
	 *
	 * @method addAll
	 * @param items[] {Array}
	 * @chainable
	 */
	Collection.Set.prototype.addAll = function(items) {
		for(var i=0; i< items.length; i++)
			this.add(items[i]);
		return this;
	},
	/**
	 * Retunrs an Array of elements present in the set, this method support to get unique items from a list of elements.
	 *
	 * @method getElements
	 * @return Returns Array[] of elements present in the Set.
	 * @deprecated 
	 */
	Collection.Set.prototype.getElements = function(){
		return this._elements;
	};
	/**
	 * Checks whether the provided item present in the set
	 *
	 * @method contains
	 * @return {Boolean} True or False
	 */
	Collection.Set.prototype.contains = function(item){
		return -1 != this._elements.indexOf(item);
	};
	
	/**
	 * returns the size of the set.
	 *
	 * @method size
	 * @return {Number} Size of the Set
	 */
	 Collection.Set.prototype.size = function(){
		return this._elements.length;
	},
	/**
	 * Checks whether set contains an Array[] of items provided.
	 *
	 * @param items Array[] of items
	 * @method containsAll
	 * @return {Boolean} True or False
	 */
	 Collection.Set.prototype.containsAll = function(items){
		for(var i=0; i< items.length; i++)
			if(!this.contains(items[i]))
				return false;
		return true;
	};
	/**
	 * Checks whether set contains an Array[] of items provided.
	 *
	 * @param items 
	 * @method remove
	 * @return {Boolean} True or False
	 * @chainable
	 */
	 Collection.Set.prototype.remove = function(item){
		var index = this._elements.indexOf(item);
		this._elements.splice(index,1);
		return this;
	};

	/**
	 * Returns A Collection.Set of the Difference Elements from the set and the provided itemSet.
	 * Algebra MINUS.
	 *
	 * @param itemSet {Collection.Set} 
	 * @method minus
	 * @return {Collection.Set} A set of items not found in provided itemSet
	 * @chainable
	 */
	 Collection.Set.prototype.minus = function(itemsSet){
		var diff=Collection.Set();
		for(var i=0; i< this._elements.length; i++)
			if(!itemsSet.contains(this._elements[i]))
				diff.add(this._elements[i]);
		return diff;
	};
	/**
	 * Returns A Collection.Set of the Difference Elements from the set and the provided itemSet.
	 * Algebra MINUS.
	 *
	 * @param itemSet {Collection.Set} 
	 * @method intersect
	 * @return {Collection.Set} A set of Items in common with the provided set.
	 * @chainable
	 */
	Collection.Set.prototype.intersect = function(itemsSet){
		var intSect=Collection.Set();
		for(var i=0; i< this._elements.length; i++)
			if(itemsSet.contains(this._elements[i]))
				intSect.add(this._elements[i]);
		return intSect;
	};
	/**
	 * Returns the Object Type 
	 *
	 * @method objType
	 * @return Collection.TYPE.SET
	 */
	Collection.Set.prototype.objType = function(){
		return Collection.TYPE.SET;
	};
	/**
	 * Returns the String formatted data of the Set
	 *
	 * @method toString
	 * @return {String}
	 */
	Collection.Set.prototype.toString = function(){
		return "["+this._elements.join()+"]";
	};
	/**
	 * Returns the deep cloned object of the provided Set
	 *
	 * @method clone
	 * @return {Collection.Set} cloned Object of the existing Object
	 */
	Collection.Set.prototype.clone = function(){
		var cloneSet = Collection.Set();
		var elements = this.getElements();
		for(var i=0; i<elements.length; i++){
			if(elements[i].clone)
				cloneSet.add(elements[i].clone());
			else
				cloneSet.add(elements[i]);
		}
		return cloneSet;
	};
