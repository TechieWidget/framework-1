// Type definitions for Samchon Framework v1.2.0
// Project: https://github.com/samchon/framework
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../typescript-stl/typescript-stl.d.ts" />

declare module "samchon-framework"
{
        export = samchon;
}
/**
 * <h1> Samchon-Framework </h1>
 *
 * <p> <a href="https://nodei.co/npm/samchon-framework">
 *	<img src="https://nodei.co/npm/samchon-framework.png?downloads=true&downloadRank=true&stars=true"> </a> </p>
 *
 * <p> Samchon, a SDN (Software Defined Network) framework. </p>
 *
 * <p> With Samchon Framework, you can implement distributed processing system within framework of OOD like
 * handling S/W objects (classes). You can realize cloud and distributed system very easily with provided
 * system templates and even integration with C++ is possible. </p>
 *
 * <p> The goal, ultimate utilization model of Samchon Framework is, building cloud system with NodeJS and
 * take heavy works to C++ distributed systems with provided modules (system templates). </p>
 *
 * @git https://github.com/samchon/framework
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon {
    /**
     * <p> Running on Node. </p>
     *
     * <p> Test whether the JavaScript is running on Node. </p>
     *
     * @references http://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
     */
    function is_node(): boolean;
}
declare namespace samchon.collection {
    /**
     * A {@link Vector} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ArrayCollection<T> extends std.Vector<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.VectorIterator<T>, n: number, val: T): std.VectorIterator<T>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.VectorIterator<T>, begin: InputIterator, end: InputIterator): std.VectorIterator<T>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.VectorIterator<T>, last: std.VectorIterator<T>): std.VectorIterator<T>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.Vector.Iterator<T>, last: std.Vector.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        unshift<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        pop(): T;
        /**
         * @inheritdoc
         */
        splice(start: number): T[];
        /**
         * @inheritdoc
         */
        splice(start: number, deleteCount: number, ...items: T[]): T[];
    }
}
declare namespace samchon.library {
    /**
     * An event class.
     *
     * <ul>
     *  <li> Comments from - https://developer.mozilla.org/en-US/docs/Web/API/Event/ </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class BasicEvent implements Event {
        NONE: number;
        CAPTURING_PHASE: number;
        AT_TARGET: number;
        BUBBLING_PHASE: number;
        private type_;
        private target_;
        private currentTarget_;
        protected trusted_: boolean;
        protected bubbles_: boolean;
        protected cancelable_: boolean;
        protected defaultPrevented_: boolean;
        protected cancelBubble_: boolean;
        private timeStamp_;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * @inheritdoc
         */
        initEvent(type: string, bubbles: boolean, cancelable: boolean): void;
        /**
         * @inheritdoc
         */
        preventDefault(): void;
        /**
         * @inheritdoc
         */
        stopImmediatePropagation(): void;
        /**
         * @inheritdoc
         */
        stopPropagation(): void;
        /**
         * @inheritdoc
         */
        type: string;
        /**
         * @inheritdoc
         */
        target: IEventDispatcher;
        /**
         * @inheritdoc
         */
        currentTarget: IEventDispatcher;
        /**
         * @inheritdoc
         */
        isTrusted: boolean;
        /**
         * @inheritdoc
         */
        bubbles: boolean;
        /**
         * @inheritdoc
         */
        cancelable: boolean;
        /**
         * @inheritdoc
         */
        eventPhase: number;
        /**
         * @inheritdoc
         */
        defaultPrevented: boolean;
        /**
         * @inheritdoc
         */
        srcElement: Element;
        /**
         * @inheritdoc
         */
        cancelBubble: boolean;
        /**
         * @inheritdoc
         */
        timeStamp: number;
        /**
         * Don't know what it is.
         */
        returnValue: boolean;
    }
    class ProgressEvent extends library.BasicEvent {
        static PROGRESS: string;
        protected numerator_: number;
        protected denominator_: number;
        constructor(type: string, numerator: number, denominator: number);
        numerator: number;
        denominator: number;
    }
}
declare namespace samchon.collection {
    /**
     * Type of function pointer for {@link CollectionEvent CollectionEvents}.
     */
    interface CollectionEventListener<T> extends EventListener {
        (event: CollectionEvent<T>): void;
    }
}
declare namespace samchon.collection {
    /**
     * @author Jeongho Nam <http://samchon.org>
     */
    class CollectionEvent<T> extends library.BasicEvent {
        /**
         * @hidden
         */
        private first_;
        /**
         * @hidden
         */
        private last_;
        /**
         *
         *
         * @param type Type of collection event.
         * @param first
         * @param last
         */
        constructor(type: string, first: std.Iterator<T>, last: std.Iterator<T>);
        /**
         * Get associative container.
         */
        container: ICollection<T>;
        /**
         * Get range of the first.
         */
        first: std.Iterator<T>;
        /**
         * Get range of the last.
         */
        last: std.Iterator<T>;
    }
}
declare namespace samchon.collection.CollectionEvent {
    const INSERT: string;
    const ERASE: string;
    const REFRESH: string;
}
declare namespace samchon.collection {
    /**
     * A {@link Deque} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeCollection<T> extends std.Deque<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.DequeIterator<T>, n: number, val: T): std.DequeIterator<T>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.DequeIterator<T>, begin: InputIterator, end: InputIterator): std.DequeIterator<T>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.DequeIterator<T>, last: std.DequeIterator<T>): std.DequeIterator<T>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.Deque.Iterator<T>, last: std.Deque.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link HashMap} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
    /**
     * A {@link HashMultiMap} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link HashSet} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashSetCollection<T> extends std.HashSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
    class HashMultiSetCollection<T> extends std.HashMultiSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * An interface for {@link IContainer containers} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ICollection<T> extends std.base.IContainer<T>, library.IEventDispatcher {
        refresh(): void;
        refresh(first: std.Iterator<T>, last: std.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link List} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ListCollection<T> extends std.List<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends T>(...items: T[]): number;
        /**
         * @inheritdoc
         */
        push_front(val: T): void;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.ListIterator<T>, n: number, val: T): std.ListIterator<T>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.ListIterator<T>, begin: InputIterator, end: InputIterator): std.ListIterator<T>;
        /**
         * @inheritdoc
         */
        pop_front(): void;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.ListIterator<T>, last: std.ListIterator<T>): std.ListIterator<T>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.List.Iterator<T>, last: std.List.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link TreeMap} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
    /**
     * A {@link TreeMultiMap} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link TreeMap} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeSetCollection<T> extends std.TreeSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
    /**
     * A {@link TreeMultiSet} who can detect element I/O events.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiSetCollection<T> extends std.TreeMultiSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> XML is a class representing a tree structued xml objects. </p>
     * <p> The XML class provides methods and properties for working with XML objects. </p>
     *
     * <p> The XML class (along with the XMLList and Namespace) implements
     * the powerful XML-handling standard defined in ECMAScript for XML (E4X) specification. </p>
     *
     * <p> XML class has a recursive, hierarchical relationship. </p>
     *
     * <p> Relationships between XML and XMLList </p>
     * <ul>
     *	<li> XML contains XMLList from dictionary of XMLList. </li>
     *  <li> XMLList contains XML from vector of XML. </li>
     * </ul>
     *
     * <h4> Note </h4>
     * <p> Do not abuse values for expressing member variables. </p>
     *
     * <table>
     *	<tr>
     *		<th>Standard Usage</th>
     *		<th>Non-standard usage abusing value</th>
     *	</tr>
     *	<tr>
     *		<td>
     *			&lt;memberList&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;member id='jhnam88' name='Jeongho+Nam' birthdate='1988-03-11' /&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;member id='master' name='Administartor' birthdate='2011-07-28' /&gt;<br/>
     *			&lt;/memberList&gt;
     *		</td>
     *		<td>
     *			&lt;member&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;id&gt;jhnam88&lt;/id&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;name&gt;Jeongho+Nam&lt;/name&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;birthdate&gt;1988-03-11&lt;/birthdate&gt;<br/>
     *			&lt;/member&gt;
     *		</td>
     *	</tr>
     * </table>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class XML extends std.HashMap<string, XMLList> {
        /**
         * <p> Tag name of the XML. </p>
         *
         * <ul>
         *	<li> \<<b>tag</b> label='property' /\>: tag => \"tag\" </li>
         *  <li> \<<b>price</b> high='1500' low='1300' open='1450' close='1320' /\>: tag => \"price\" </li>
         * </ul>
         */
        private tag;
        /**
         * <p> Value of the XML. </p>
         *
         * <ul>
         *  <li> \<parameter name='age' type='int'\><b>26</b>\</parameter\>: value => 26 </li>
         *	<li> \<price high='1500' low='1300' open='1450' close='1320' /\>: value => null </li>
         * </ul>
         */
        private value;
        /**
         * <p> Properties belongs to the XML. </p>
         * <p> A Dictionary of properties accessing each property by its key. </p>
         *
         * <ul>
         *	<li> \<price <b>high='1500' low='1300' open='1450' close='1320'</b> /\>:
         *		propertyMap => {{\"high\": 1500}, {\"low\": 1300}, {\"open\": 1450}, {\"close\", 1320}} </li>
         *	<li> \<member <b>id='jhnam88' name='Jeongho+Nam' comment='Hello.+My+name+is+Jeongho+Nam'</b> \>:
         *		propertyMap => {{\"id\", \"jhnam88\"}, {\"name\", \"Jeongho Nam <http://samchon.org>\"},
         *					 {\"comment\", \"Hello. My name is Jeongho Nam <http://samchon.org>\"}} </li>
         * </ul>
         */
        private properties;
        /**
         * <p> Default Constructor. </p>
         *
         * <p> If the string parameter is not omitted, constructs its tag, value and
         * properties by parsing the string. If there's children, then construct the
         * children XML, XMLList objects, too. </p>
         *
         * @param str A string to be parsed
         */
        constructor(str?: string);
        /**
         * <p> Construct XML objects by parsing a string. </p>
         */
        private construct(str);
        /**
         * <p> Parse and fetch a tag. </p>
         */
        private parseTag(str);
        /**
         * <p> Parse and fetch properties. </p>
         */
        private parseProperty(str);
        /**
         * <p> Parse and fetch a value. </p>
         */
        private parseValue(str);
        /**
         * <p> Parse and construct children XML objects. </p>
         */
        private parseChildren(str);
        /**
         * <p> Get tag. </p>
         */
        getTag(): string;
        /**
         * <p> Get value. </p>
         */
        getValue(): string;
        /**
         * <p> Test whether a property exists or not. </p>
         */
        hasProperty(key: string): boolean;
        /**
         * <p> Get property by its key. </p>
         */
        getProperty(key: string): string;
        getPropertyMap(): std.HashMap<string, string>;
        /**
         * <p> Set tag (identifier) of the XML. </p>
         */
        setTag(str: string): void;
        /**
         * <p> Set value of the XML. </p>
         *
         * <p> Do not abuse values for expressing member variables. </p>
         * <table>
         *	<tr>
         *		<th>Standard Usage</th>
         *		<th>Non-standard usage abusing value</th>
         *	</tr>
         *	<tr>
         *		<td>
         *			\<memberList\>\n
         *			&nbsp;&nbsp;&nbsp;&nbsp;\<member id='jhnam88' name='Jeongho+Nam' birthdate='1988-03-11' /\>\n
         *			&nbsp;&nbsp;&nbsp;&nbsp;\<member id='master' name='Administartor' birthdate='2011-07-28' /\>\n
         *			\</memberList\>
         *		</td>
         *		<td>
         *			\<member\>\n
         *				\<id\>jhnam88\</id\>\n
         *				\<name\>Jeongho+Nam\</name\>\n
         *				\<birthdate\>1988-03-11\</birthdate\>\n
         *			\</member\>
         *		</td>
         *	</tr>
         * </table>
         *
         * @param val A value to set
         */
        setValue(str: string): void;
        /**
         * <p> Set a property with its key. </p>
         */
        setProperty(key: string, value: string): void;
        /**
         * <p> Erase a property by its key. </p>
         *
         * @param key The key of the property to erase
         * @throw exception out of range
         */
        eraseProperty(key: string): void;
        push<L extends string, U extends XMLList>(...args: std.Pair<L, U>[]): number;
        push<L extends string, U extends XMLList>(...args: [L, U][]): number;
        push(...xmls: XML[]): number;
        push(...xmlLists: XMLList[]): number;
        addAllProperties(xml: XML): void;
        clearProperties(): void;
        private calcMinIndex(...args);
        /**
         * <p> Decode a value. </p>
         *
         * <table>
         *	<tr>
         *		<th>Encoded</th>
         *		<th>Decoded</th>
         *	</tr>
         *	<tr>
         *		<td>\&amp;</td>
         *		<td>\&</td>
         *	</tr>
         *	<tr>
         *		<td>\&lt;</td>
         *		<td>\<</td>
         *	</tr>
         *	<tr>
         *		<td>\&gt;</td>
         *		<td>\></td>
         *	</tr>
         * </table>
         *
         * @return A decoded string represents a value
         */
        static decodeValue(str: string): string;
        /**
         * <p> Encode a value. </p>
         *
         * <table>
         *	<tr>
         *		<th>Original</th>
         *		<th>Encoded</th>
         *	</tr>
         *	<tr>
         *		<td>\&</td>
         *		<td>\&amp;</td>
         *	</tr>
         *	<tr>
         *		<td>\<</td>
         *		<td>\&lt;</td>
         *	</tr>
         *	<tr>
         *		<td>\></td>
         *		<td>\&gt;</td>
         *	</tr>
         * </table>
         *
         * @return A encoded string represents a value
         */
        static encodeValue(str: string): string;
        /**
          * <p> Decode a property. </p>
          *
          * <table>
          *	<tr>
          *		<th>Encoded</th>
          *		<th>Decoded</th>
          *	</tr>
          *	<tr>
          *		<td>\&amp;</td>
          *		<td>\&</td>
          *	</tr>
          *	<tr>
          *		<td>\&lt;</td>
          *		<td>\<</td>
          *	</tr>
          *	<tr>
          *		<td>\&gt;</td>
          *		<td>\></td>
          *	</tr>
          *	<tr>
          *		<td>&quot;</td>
          *		<td>\"</td>
          *	</tr>
          *	<tr>
          *		<td>&apos;</td>
          *		<td>'</td>
          *	</tr>
          *	<tr>
          *		<td>&#x9;</td>
          *		<td>'</td>
          *	</tr>
          *	<tr>
          *		<td>&apos;</td>
          *		<td>\\t</td>
          *	</tr>
          *	<tr>
          *		<td>&#xA;</td>
          *		<td>\\n</td>
          *	</tr>
          *	<tr>
          *		<td>&#xD;</td>
          *		<td>\\r</td>
          *	</tr>
          * </table>
          *
          * @return A decoded string represents a property
          */
        static decodeProperty(str: string): string;
        /**
         * <p> Decode a property. </p>
         *
         * <table>
         *	<tr>
         *		<th>Original</th>
         *		<th>Encoded</th>
         *	</tr>
         *	<tr>
         *		<td>\&</td>
         *		<td>\&amp;</td>
         *	</tr>
         *	<tr>
         *		<td>\<</td>
         *		<td>\&lt;</td>
         *	</tr>
         *	<tr>
         *		<td>\></td>
         *		<td>\&gt;</td>
         *	</tr>
         *	<tr>
         *		<td>\"</td>
         *		<td>&quot;</td>
         *	</tr>
         *	<tr>
         *		<td>'</td>
         *		<td>&apos;</td>
         *	</tr>
         *	<tr>
         *		<td>'</td>
         *		<td>&#x9;</td>
         *	</tr>
         *	<tr>
         *		<td>\\t</td>
         *		<td>&apos;</td>
         *	</tr>
         *	<tr>
         *		<td>\\n</td>
         *		<td>&#xA;</td>
         *	</tr>
         *	<tr>
         *		<td>\\r</td>
         *		<td>&#xD;</td>
         *	</tr>
         * </table>
         *
         * @return A encoded string represents a property
         */
        static encodeProperty(str: string): string;
        /**
         * <p> Convert the XML to a string. </p>
         */
        toString(level?: number): string;
        /**
         * <p> Convert the XML to HTML string. </p>
         */
        toHTML(level?: number): string;
    }
    /**
     * <p> List of XML(s) having same tag. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class XMLList extends std.Vector<XML> {
        getTag(): string;
        /**
         * <p> Convert XMLList to string. </p>
         *
         * @param level Level(depth) of the XMLList.
         */
        toString(level?: number): string;
        /**
         * <p> Convert XMLList to HTML string. </p>
         *
         * @param level Level(depth) of the XMLList.
         */
        toHTML(level?: number): string;
    }
}
declare namespace samchon.collection {
    class XMLListCollection extends library.XMLList implements ICollection<library.XML> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends library.XML>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: library.XML): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.VectorIterator<library.XML>, n: number, val: library.XML): std.VectorIterator<library.XML>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends library.XML, InputIterator extends std.Iterator<U>>(position: std.VectorIterator<library.XML>, begin: InputIterator, end: InputIterator): std.VectorIterator<library.XML>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.VectorIterator<library.XML>, last: std.VectorIterator<library.XML>): std.VectorIterator<library.XML>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.Vector.Iterator<library.XML>, last: std.Vector.Iterator<library.XML>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        unshift<U extends library.XML>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        pop(): library.XML;
        /**
         * @inheritdoc
         */
        splice(start: number): library.XML[];
        /**
         * @inheritdoc
         */
        splice(start: number, deleteCount: number, ...items: library.XML[]): library.XML[];
    }
}
declare namespace samchon.library {
    /**
     * <p> Case generator. </p>
     *
     * <p> CaseGenerator is an abstract case generator using like a matrix. </p>
     * <ul>
     *  <li> nTTr(n^r) -> CombinedPermutationGenerator </li>
     *  <li> nPr -> PermutationGenerator </li>
     *  <li> n! -> FactorialGenerator </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class CaseGenerator {
        /**
         * <p> Size, the number of all cases. </p>
         */
        protected size_: number;
        /**
         * <p> N, size of the candidates. </p>
         */
        protected n_: number;
        /**
         * <p> R, size of elements of each case. </p>
         */
        protected r_: number;
        /**
         * <p> Construct from size of N and R. </p>
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        /**
         * <p> Get size of all cases. </p>
         *
         * @return Get a number of the all cases.
         */
        size(): number;
        /**
         * <p> Get size of the N. </p>
         */
        n(): number;
        /**
         * <p> Get size of the R. </p>
         */
        r(): number;
        /**
         * <p> Get index'th case. </p>
         *
         * @param index Index number
         * @return The row of the index'th in combined permuation case
         */
        abstract at(index: number): Array<number>;
    }
    /**
     * <p> A combined-permutation case generator. </p>
     * <p> <sub>n</sub>TT<sub>r</sub> </p>
     *
     * @inheritdoc
     * @author Jeongho Nam <http://samchon.org>
     */
    class CombinedPermutationGenerator extends CaseGenerator {
        /**
         * <p> An array using for dividing each element index. </p>
         */
        private divider_array;
        /**
         * <p> Construct from size of N and R. </p>
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        at(index: number): Array<number>;
    }
    /**
     * <p> A permutation case generator. </p>
     * <p> nPr </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     * @inheritdoc
     */
    class PermuationGenerator extends CaseGenerator {
        /**
         * <p> Construct from size of N and R. </p>
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        /**
         * @inheritdoc
         */
        at(index: number): Array<number>;
    }
    class FactorialGenerator extends PermuationGenerator {
        /**
         * Construct from factorial size N.
         *
         * @param n Factoria size N.
         */
        constructor(n: number);
    }
}
declare namespace samchon.library {
    /**
     * <p> The IEventDispatcher interface defines methods for adding or removing event listeners, checks
     * whether specific types of event listeners are registered, and dispatches events. </p>
     *
     * <p> Event targets are an important part of the Flash�� Player and Adobe AIR event model. The event
     * target serves as the focal point for how events flow through the display list hierarchy. When an
     * event such as a mouse click or a keypress occurs, an event object is dispatched into the event flow
     * from the root of the display list. The event object makes a round-trip journey to the event target,
     * which is conceptually divided into three phases: the capture phase includes the journey from the
     * root to the last node before the event target's node; the target phase includes only the event
     * target node; and the bubbling phase includes any subsequent nodes encountered on the return trip to
     * the root of the display list. </p>
     *
     * <p> In general, the easiest way for a user-defined class to gain event dispatching capabilities is
     * to extend EventDispatcher. If this is impossible (that is, if the class is already extending another
     * class), you can instead implement the IEventDispatcher interface, create an EventDispatcher member,
     * and write simple hooks to route calls into the aggregated EventDispatcher. </p>
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/IEventDispatcher.html
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    interface IEventDispatcher {
        /**
         * <p> Checks whether the EventDispatcher object has any listeners registered for a specific type
         * of event. This allows you to determine where an EventDispatcher object has altered handling of
         * an event type in the event flow hierarchy. To determine whether a specific event type actually
         * triggers an event listener, use willTrigger(). </p>
         *
         * <p> The difference between hasEventListener() and willTrigger() is that hasEventListener()
         * examines only the object to which it belongs, whereas willTrigger() examines the entire event
         * flow for the event specified by the type parameter. </p>
         *
         * @param type The type of event.
         */
        hasEventListener(type: string): boolean;
        /**
         * <p> Dispatches an event into the event flow. </p>
         * <p> The event target is the EventDispatcher object upon which the dispatchEvent() method is called. </p>
         *
         * @param event The Event object that is dispatched into the event flow. If the event is being
         *			  redispatched, a clone of the event is created automatically. After an event is
         *			  dispatched, its target property cannot be changed, so you must create a new copy
         *			  of the event for redispatching to work.
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * <p> Registers an event listener object with an EventDispatcher object so that the listener
         * receives notification of an event. You can register event listeners on all nodes in the display
         * list for a specific type of event, phase, and priority.
         *
         * <p> After you successfully register an event listener, you cannot change its priority through
         * additional calls to addEventListener(). To change a listener's priority, you must first call
         * removeEventListener(). Then you can register the listener again with the new priority level. </p>
         *
         * <p> Keep in mind that after the listener is registered, subsequent calls to addEventListener()
         * with a different type or useCapture value result in the creation of a separate listener
         * registration. For example, if you first register a listener with useCapture set to true,
         * it listens only during the capture phase. If you call addEventListener() again using the same
         * listener object, but with useCapture set to false, you have two separate listeners: one that
         * listens during the capture phase and another that listens during the target and bubbling phases. </p>
         *
         * <p> You cannot register an event listener for only the target phase or the bubbling phase.
         * Those phases are coupled during registration because bubbling applies only to the ancestors of
         * the target node. </p>
         *
         * <p> If you no longer need an event listener, remove it by calling removeEventListener(), or
         * memory problems could result. Event listeners are not automatically removed from memory because
         * the garbage collector does not remove the listener as long as the dispatching object exists
         * (unless the useWeakReference parameter is set to true). </p>
         *
         * <p> Copying an EventDispatcher instance does not copy the event listeners attached to it. (If
         * your newly created node needs an event listener, you must attach the listener after creating
         * the node.) However, if you move an EventDispatcher instance, the event listeners attached to
         * it move along with it. </p>
         *
         * <p> If the event listener is being registered on a node while an event is also being processed
         * on this node, the event listener is not triggered during the current phase but may be triggered
         * during a later phase in the event flow, such as the bubbling phase. </p>
         *
         * <p> If an event listener is removed from a node while an event is being processed on the node,
         * it is still triggered by the current actions. After it is removed, the event listener is never
         * invoked again (unless it is registered again for future processing). </p>
         *
         * @param event The type of event.
         * @param listener The listener function that processes the event.
         *				 This function must accept an Event object as its only parameter and must return
         *				 nothing.
         */
        addEventListener(type: string, listener: EventListener): void;
        /**
         * <p> Registers an event listener object with an EventDispatcher object so that the listener
         * receives notification of an event. You can register event listeners on all nodes in the display
         * list for a specific type of event, phase, and priority.
         *
         * <p> After you successfully register an event listener, you cannot change its priority through
         * additional calls to addEventListener(). To change a listener's priority, you must first call
         * removeEventListener(). Then you can register the listener again with the new priority level. </p>
         *
         * <p> Keep in mind that after the listener is registered, subsequent calls to addEventListener()
         * with a different type or useCapture value result in the creation of a separate listener
         * registration. For example, if you first register a listener with useCapture set to true,
         * it listens only during the capture phase. If you call addEventListener() again using the same
         * listener object, but with useCapture set to false, you have two separate listeners: one that
         * listens during the capture phase and another that listens during the target and bubbling phases. </p>
         *
         * <p> You cannot register an event listener for only the target phase or the bubbling phase.
         * Those phases are coupled during registration because bubbling applies only to the ancestors of
         * the target node. </p>
         *
         * <p> If you no longer need an event listener, remove it by calling removeEventListener(), or
         * memory problems could result. Event listeners are not automatically removed from memory because
         * the garbage collector does not remove the listener as long as the dispatching object exists
         * (unless the useWeakReference parameter is set to true). </p>
         *
         * <p> Copying an EventDispatcher instance does not copy the event listeners attached to it. (If
         * your newly created node needs an event listener, you must attach the listener after creating
         * the node.) However, if you move an EventDispatcher instance, the event listeners attached to
         * it move along with it. </p>
         *
         * <p> If the event listener is being registered on a node while an event is also being processed
         * on this node, the event listener is not triggered during the current phase but may be triggered
         * during a later phase in the event flow, such as the bubbling phase. </p>
         *
         * <p> If an event listener is removed from a node while an event is being processed on the node,
         * it is still triggered by the current actions. After it is removed, the event listener is never
         * invoked again (unless it is registered again for future processing). </p>
         *
         * @param event The type of event.
         * @param listener The listener function that processes the event.
         *				 This function must accept an Event object as its only parameter and must return
         *				 nothing.
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        /**
         * Removes a listener from the EventDispatcher object. If there is no matching listener registered
         * with the EventDispatcher object, a call to this method has no effect.
         *
         * @param type The type of event.
         * @param listener The listener object to remove.
         */
        removeEventListener(type: string, listener: EventListener): void;
        /**
         * Removes a listener from the EventDispatcher object. If there is no matching listener registered
         * with the EventDispatcher object, a call to this method has no effect.
         *
         * @param type The type of event.
         * @param listener The listener object to remove.
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
    }
    /**
     * <p> Registers an event listener object with an EventDispatcher object so that the listener
     * receives notification of an event. You can register event listeners on all nodes in the display
     * list for a specific type of event, phase, and priority. </p>
     *
     * <p> After you successfully register an event listener, you cannot change its priority through
     * additional calls to addEventListener(). To change a listener's priority, you must first call
     * removeListener(). Then you can register the listener again with the new priority level. </p>
     *
     * Keep in mind that after the listener is registered, subsequent calls to <code>addEventListener()</code>
     * with a different type or useCapture value result in the creation of a separate listener registration.
     * For example, if you first register a listener with useCapture set to true, it listens only during the
     * capture phase. If you call addEventListener() again using the same listener object, but with
     * useCapture set to false, you have two separate listeners: one that listens during the capture
     * phase and another that listens during the target and bubbling phases.
     *
     * <p> You cannot register an event listener for only the target phase or the bubbling phase. Those
     * phases are coupled during registration because bubbling applies only to the ancestors of the
     * target node. </p>
     *
     * <p> If you no longer need an event listener, remove it by calling <code>removeEventListener()</code>,
     * or memory problems could result. Event listeners are not automatically removed from memory
     * because the garbage collector does not remove the listener as long as the dispatching object
     * exists (unless the useWeakReference parameter is set to true). </p>
     *
     * <p> Copying an EventDispatcher instance does not copy the event listeners attached to it. (If your
     * newly created node needs an event listener, you must attach the listener after creating the
     * node.) However, if you move an EventDispatcher instance, the event listeners attached to it move
     * along with it. </p>
     *
     * <p> If the event listener is being registered on a node while an event is being processed on
     * this node, the event listener is not triggered during the current phase but can be triggered
     * during a later phase in the event flow, such as the bubbling phase. </p>
     *
     * <p> If an event listener is removed from a node while an event is being processed on the node, it is
     * still triggered by the current actions. After it is removed, the event listener is never invoked
     * again (unless registered again for future processing). </p>
     *
     * <ul>
     *  <li> Made by AS3 - http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/EventDispatcher.html
     * </ul>
     *
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    class EventDispatcher implements IEventDispatcher {
        /**
         * The origin object who issuing events.
         */
        protected event_dispatcher_: IEventDispatcher;
        /**
         * Container of listeners.
         */
        protected event_listeners_: std.HashMap<string, std.HashSet<std.Pair<EventListener, Object>>>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from the origin event dispatcher.
         *
         * @param dispatcher The origin object who issuing events.
         */
        constructor(dispatcher: IEventDispatcher);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> The {@link FileReference} class provides a means to load and save files in browser level. </p>
     *
     * <p> The {@link FileReference} class provides a means to {@link load} and {@link save} files in browser level. A
     * browser-system dialog box prompts the user to select a file to {@link load} or a location for {@link svae}. Each
     * {@link FileReference} object refers to a single file on the user's disk and has properties that contain
     * information about the file's size, type, name, creation date, modification date, and creator type (Macintosh only).
     * </p>
     *
     * <p> FileReference instances are created in the following ways: </p>
     * <ul>
     *	<li>
     *		When you use the new operator with the {@link FileReference} constructor:
     *		<code>var myFileReference = new FileReference();</code>
     *	</li>
     *	<li>
     *		When you call the {@link FileReferenceList.browse} method, which creates an array of {@link FileReference}
     *		objects.
     *	</li>
     * </ul>
     *
     * <p> During a load operation, all the properties of a {@link FileReference} object are populated by calls to the
     * {@link FileReference.browse} or {@link FileReferenceList.browse} methods. During a save operation, the name
     * property is populated when the select event is dispatched; all other properties are populated when the complete
     * event is dispatched. </p>
     *
     * <p> The {@link browse browse()} method opens an browser-system dialog box that prompts the user to select a file
     * for {@link load}. The {@link FileReference.browse} method lets the user select a single file; the
     * {@link FileReferenceList.browse} method lets the user select multiple files. After a successful call to the
     * {@link browse browse()} method, call the {@link FileReference.load} method to load one file at a time. The
     * {@link FileReference.save} method prompts the user for a location to save the file and initiates downloading from
     * a binary or string data. </p>
     *
     * <p> The {@link FileReference} and {@link FileReferenceList} classes do not let you set the default file location
     * for the dialog box that the {@link browse} or {@link save} methods generate. The default location shown in the
     * dialog box is the most recently browsed folder, if that location can be determined, or the desktop. The classes do
     * not allow you to read from or write to the transferred file. They do not allow the browser that initiated the
     * {@link load} or {@link save} to access the loaded or saved file or the file's location on the user's disk. </p>
     *
     * @references http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/FileReference.html
     * @author Jeongho Nam <http://samchon.org>
     */
    class FileReference extends EventDispatcher {
        /**
         * @hidden
         */
        private file_;
        /**
         * @hidden
         */
        private data_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> The data from the loaded file after a successful call to the {@link load load()} method. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        data: any;
        /**
         * <p> The name of the file on the local disk. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        name: string;
        /**
         * <p> The filename extension. </p>
         *
         * <p> A file's extension is the part of the name following (and not including) the final dot (&quot;.&quot;). If
         * there is no dot in the filename, the extension is <code>null</code>. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        extension: string;
        /**
         * <p> The file type, metadata of the {@link extension}. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        type: string;
        /**
         * <p> The size of the file on the local disk in bytes. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        size: number;
        /**
         * <p> The date that the file on the local disk was last modified. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        modificationDate: Date;
        /**
         * <p> Displays a file-browsing dialog box that lets the user select a file to upload. The dialog box is native
         * to the user's browser system. The user can select a file on the local computer or from other systems, for
         * example, through a UNC path on Windows. </p>
         *
         * <p> When you call this method and the user successfully selects a file, the properties of this
         * {@link FileReference} object are populated with the properties of that file. Each subsequent time that the
         * {@link FileReference.browse} method is called, the {@link FileReference} object's properties are reset to
         * the file that the user selects in the dialog box. Only one {@link browse browse()} can be performed at a time
         * (because only one dialog box can be invoked at a time). </p>
         *
         * <p> Using the <i>typeFilter parameter</i>, you can determine which files the dialog box displays. </p>
         *
         * @param typeFilter An array of filter strings used to filter the files that are displayed in the dialog box.
         *					 If you omit this parameter, all files are displayed.
         */
        browse(...typeFilter: string[]): void;
        /**
         * <p> Starts the load of a local file selected by a user. </p>
         *
         * <p> You must call the {@link FileReference.browse} or {@link FileReferenceList.browse} method before you call
         * the {@link load load()} method. </p>
         *
         * <p> Listeners receive events to indicate the progress, success, or failure of the load. Although you can use
         * the {@link FileReferenceList} object to let users select multiple files to load, you must {@link load} the
         * {@link FileReferenceList files} one by one. To {@link load} the files one by one, iterate through the
         * {@link FileReferenceList.fileList} array of {@link FileReference} objects. </p>
         *
         * <p> If the file finishes loading successfully, its contents are stored in the {@link data} property. </p>
         */
        load(): void;
        /**
         * <p> Save a file to local filesystem. </p>
         *
         * <p> {@link FileReference.save} implemented the save function by downloading a file from a hidden anchor tag.
         * However, the plan, future's {@link FileReference} will follow such rule: </p>
         *
         * <p> Opens a dialog box that lets the user save a file to the local filesystem. </p>
         *
         * <p> The {@link save save()} method first opens an browser-system dialog box that asks the user to enter a
         * filename and select a location on the local computer to save the file. When the user selects a location and
         * confirms the save operation (for example, by clicking Save), the save process begins. Listeners receive events
         * to indicate the progress, success, or failure of the save operation. To ascertain the status of the dialog box
         * and the save operation after calling {@link save save()}, your code must listen for events such as cancel,
         * open, progress, and complete. </p>
         *
         * <p> When the file is saved successfully, the properties of the {@link FileReference} object are populated with
         * the properties of the local file. The complete event is dispatched if the save is successful. </p>
         *
         * <p> Only one {@link browse browse()} or {@link save()} session can be performed at a time (because only one
         * dialog box can be invoked at a time). </p>
         *
         * @param data The data to be saved. The data can be in one of several formats, and will be treated appropriately.
         * @param fileName File name to be saved.
         */
        save(data: string, fileName: string): void;
    }
    /**
     * <p> The {@link FileReferenceList} class provides a means to let users select one or more files for
     * {@link FileReference.load loading}. A {@link FileReferenceList} object represents a group of one or more local
     * files on the user's disk as an array of {@link FileReference} objects. For detailed information and important
     * considerations about {@link FileReference} objects and the FileReference class, which you use with
     * {@link FileReferenceList}, see the {@link FileReference} class. </p>
     *
     * <p> To work with the {@link FileReferenceList} class: </p>
     * <ul>
     *	<li> Instantiate the class: <code>var myFileRef = new FileReferenceList();</code> </li>
     *	<li>
     *		Call the {@link FileReferenceList.browse} method, which opens a dialog box that lets the user select one or
     *		more files for upload: <code>myFileRef.browse();</code>
     *	</li>
     *	<li>
     *		After the {@link browse browse()} method is called successfully, the {@link fileList} property of the
     *		{@link FileReferenceList} object is populated with an array of {@link FileReference} objects.
     *	</li>
     *	<li> Call {@link FileReference.load} on each element in the {@link fileList} array. </li>
     * </ul>
     *
     * <p> The {@link FileReferenceList} class includes a {@link browse browse()} method and a {@link fileList} property
     * for working with multiple files. </p>
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/FileReferenceList.html
     * @author Jeongho Nam <http://samchon.org>
     */
    class FileReferenceList extends EventDispatcher {
        /**
         * @hidden
         */
        file_list: std.Vector<FileReference>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> An array of {@link FileReference} objects. </p>
         *
         * <p> When the {@link FileReferenceList.browse} method is called and the user has selected one or more files
         * from the dialog box that the {@link browse browse()} method opens, this property is populated with an array of
         * {@link FileReference} objects, each of which represents the files the user selected. </p>
         *
         * <p> The {@link fileList} property is populated anew each time {@link browse browse()} is called on that
         * {@link FileReferenceList} object. </p>
         */
        fileList: std.Vector<FileReference>;
        /**
         * <p> Displays a file-browsing dialog box that lets the user select one or more local files to upload. The
         * dialog box is native to the user's browser system.  </p>
         *
         * <p> When you call this method and the user successfully selects files, the {@link fileList} property of this
         * {@link FileReferenceList} object is populated with an array of {@link FileReference} objects, one for each
         * file that the user selects. Each subsequent time that the {@link FileReferenceList.browse} method is called,
         * the {@link FileReferenceList.fileList} property is reset to the file(s) that the user selects in the dialog
         * box. </p>
         *
         * <p> Using the <i>typeFilter</i> parameter, you can determine which files the dialog box displays. </p>
         *
         * <p> Only one {@link FileReference.browse}, {@link FileReference.load}, or {@link FileReferenceList.browse}
         * session can be performed at a time on a {@link FileReferenceList} object (because only one dialog box can be
         * opened at a time). </p>
         *
         * @param typeFilter An array of filter strings used to filter the files that are displayed in the dialog box.
         *					 If you omit this parameter, all files are displayed.
         */
        browse(...typeFilter: string[]): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> A utility class supporting static methods of string. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class StringUtil {
        /**
         * <p> Generate a substring. </p>
         *
         * <p> Extracts a substring consisting of the characters from specified start to end.
         * It's same with str.substring( ? = (str.find(start) + start.size()), str.find(end, ?) ) </p>
         *
         * <code>
         let str = between("ABCD[EFGH]IJK", "[", "]");
         console.log(str); // PRINTS "EFGH"
         * </code>
         *
         * <ul>
         *	<li> If start is not specified, extracts from begin of the string to end. </li>
         *	<li> If end is not specified, extracts from start to end of the string. </li>
         *	<li> If start and end are all omitted, returns str, itself. </li>
         * </ul>
         *
         * @param str Target string to be applied between
         * @param start A string for separating substring at the front
         * @param end A string for separating substring at the end
         *
         * @return substring by specified terms
         */
        static between(str: string, start?: string, end?: string): string;
        /**
         * <p> Fetch substrings. </p>
         *
         * <p> Splits a string into an array of substrings dividing by specified delimeters of start and end.
         * It's the array of substrings adjusted the between. </p>
         *
         * <ul>
         *	<li> If startStr is omitted, it's same with the split by endStr not having last item. </li>
         *	<li> If endStr is omitted, it's same with the split by startStr not having first item. </li>
         *	<li> If startStr and endStar are all omitted, returns <i>str</i>. </li>
         * </ul>
         *
         * @param str Target string to split by between
         * @param start A string for separating substring at the front.
         *				If omitted, it's same with split(end) not having last item
         * @param end A string for separating substring at the end.
         *			  If omitted, it's same with split(start) not having first item
         * @return An array of substrings
         */
        static betweens(str: string, start?: string, end?: string): Array<string>;
        /**
         * An array containing whitespaces.
         */
        private static SPACE_ARRAY;
        /**
         * Remove all designated characters from the beginning and end of the specified string.
         *
         * @param str The string whose designated characters should be trimmed.
         * @param args Designated character(s).
         *
         * @return Updated string where designated characters was removed from the beginning and end.
         */
        static trim(str: string, ...args: string[]): string;
        /**
         * Remove all designated characters from the beginning of the specified string.
         *
         * @param str The string should be trimmed.
         * @param delims Designated character(s).
         *
         * @return Updated string where designated characters was removed from the beginning
         */
        static ltrim(str: string, ...args: string[]): string;
        /**
         * Remove all designated characters from the end of the specified string.
         *
         * @param str The string should be trimmed.
         * @param delims Designated character(s).
         *
         * @return Updated string where designated characters was removed from the end.
         */
        static rtrim(str: string, ...args: string[]): string;
        /**
         * Substitute <code>{n}</code> tokens within the specified string.
         *
         * @param format The string to make substitutions in. This string can contain special tokens of the form
         *				 <code>{n}</code>, where <code>n</code> is a zero based index, that will be replaced with the
         *				 additional parameters found at that index if specified.
         * @param args Additional parameters that can be substituted in the <i>format</i> parameter at each
         *			   <code>{n}</code> location, where <code>n</code> is an integer (zero based) index value into
         *			   the array of values specified.
         *
         * @return New string with all of the <code>{n}</code> tokens replaced with the respective arguments specified.
         */
        static substitute(format: string, ...args: any[]): string;
        /**
         * Returns a string specified word is replaced.
         *
         * @param str Target string to replace
         * @param before Specific word you want to be replaced
         * @param after Specific word you want to replace
         *
         * @return A string specified word is replaced
         */
        static replaceAll(str: string, before: string, after: string): string;
        /**
         * Returns a string specified words are replaced.
         *
         * @param str Target string to replace
         * @param pairs A specific word's pairs you want to replace and to be replaced
         *
         * @return A string specified words are replaced
         */
        static replaceAll(str: string, ...pairs: std.Pair<string, string>[]): string;
        /**
         * <p> Get a tabbed string by specified size. </p>
         */
        static tab(size: number): string;
        /**
         * <p> Get a tabbed HTLM string by specified size. </p>
         */
        static htmlTab(size: number): string;
        /**
         * Replace all HTML spaces to a literal space.
         *
         * @param str Target string to replace.
         */
        static removeHTMLSpaces(str: string): string;
    }
}
declare namespace samchon.library {
    class URLVariables extends std.HashMap<string, string> {
        constructor();
        constructor(str: string);
        toString(): string;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> An interface of entity. </p>
     *
     * <p> Entity is a class for standardization of expression method using on network I/O by XML. If
     * Invoke is a standard message protocol of Samchon Framework which must be kept, Entity is a
     * recommended semi-protocol of message for expressing a data class. Following the semi-protocol
     * Entity is not imposed but encouraged. </p>
     *
     * <p> As we could get advantages from standardization of message for network I/O with Invoke,
     * we can get additional advantage from standardizing expression method of data class with Entity.
     * We do not need to know a part of network communication. Thus, with the Entity, we can only
     * concentrate on entity's own logics and relationships between another entities. Entity does not
     * need to how network communications are being done. </p>
     *
     * <p> I say repeatedly. Expression method of Entity is recommended, but not imposed. It's a semi
     * protocol for network I/O but not a essential protocol must be kept. The expression method of
     * Entity, using on network I/O, is expressed by XML string. </p>
     *
     * <p> If your own network system has a critical performance issue on communication data class,
     * it would be better to using binary communication (with ByteArray).
     * Don't worry about the problem! Invoke also provides methods for binary data (ByteArray). </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IEntity {
        /**
         * <p> Construct data of the Entity from a XML object. </p>
         *
         * <p> Overrides the construct() method and fetch data of member variables from the XML. </p>
         *
         * <p> By recommended guidance, data representing member variables are contained in properties
         * of the put XML object. </p>
         *
         * @param xml An xml used to contruct data of entity.
         */
        construct(xml: library.XML): void;
        /**
         * <p> Get a key that can identify the Entity uniquely. </p>
         *
         * <p> If identifier of the Entity is not atomic value, returns a paired or tuple object
         * that can represents the composite identifier. </p>
         *
         * <code>
         * class Point extends Entity
         * {
         *     private x: number;
         *     private y: number;
         *
         *     public key(): std.Pair<number, number>
         *     {
         *         return std.make_pair(this.x, this.y);
         *     }
         * }
         * </code>
         */
        key(): any;
        /**
         * <p> A tag name when represented by XML. </p>
         *
         * <code> <TAG {...properties} /> </code>
         */
        TAG(): string;
        /**
         * <p> Get a XML object represents the Entity. </p>
         *
         * <p> A member variable (not object, but atomic value like number, string or date) is categorized
         * as a property within the framework of entity side. Thus, when overriding a toXML() method and
         * archiving member variables to an XML object to return, puts each variable to be a property
         * belongs to only a XML object. </p>
         *
         * <p> Don't archive the member variable of atomic value to XML::value causing enormouse creation
         * of XML objects to number of member variables. An Entity must be represented by only a XML
         * instance (tag). </p>
         *
         * <h4> Standard Usage. </h4>
         * <code>
         * <memberList>
         *	<member id='jhnam88' name='Jeongho Nam' birthdate='1988-03-11' />
         *	<member id='master' name='Administartor' birthdate='2011-07-28' />
         * </memberList>
         * </code>
         *
         * <h4> Non-standard usage abusing value. </h4>
         * <code>
         * <member>
         *	<id>jhnam88</id>
         *	<name>Jeongho Nam</name>
         *	<birthdate>1988-03-11</birthdate>
         * </member>
         * <member>
         *	<id>master</id>
         *	<name>Administartor</name>
         *	<birthdate>2011-07-28</birthdate>
         * </member>
         * </code>
         *
         * @return An XML object representing the Entity.
         */
        toXML(): library.XML;
    }
    /**
     * <p> An entity, a standard data class. </p>
     *
     * <p> Entity is a class for standardization of expression method using on network I/O by XML. If
     * Invoke is a standard message protocol of Samchon Framework which must be kept, Entity is a
     * recommended semi-protocol of message for expressing a data class. Following the semi-protocol
     * Entity is not imposed but encouraged. </p>
     *
     * <p> As we could get advantages from standardization of message for network I/O with Invoke,
     * we can get additional advantage from standardizing expression method of data class with Entity.
     * We do not need to know a part of network communication. Thus, with the Entity, we can only
     * concentrate on entity's own logics and relationships between another entities. Entity does not
     * need to how network communications are being done. </p>
     *
     * <p> I say repeatedly. Expression method of Entity is recommended, but not imposed. It's a semi
     * protocol for network I/O but not a essential protocol must be kept. The expression method of
     * Entity, using on network I/O, is expressed by XML string. </p>
     *
     * <p> If your own network system has a critical performance issue on communication data class,
     * it would be better to using binary communication (with ByteArray).
     * Don't worry about the problem! Invoke also provides methods for binary data (ByteArray). </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Entity implements IEntity {
        /**
         * Default Constructor.
         */
        constructor();
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    interface IEntityGroup<T extends IEntity> extends IEntity, std.base.IContainer<T> {
        /**
         * <p> Construct data of the Entity from an XML object. </p>
         *
         * <p> Constructs the EntityArray's own member variables only from the input XML object. </p>
         *
         * <p> Do not consider about constructing children Entity objects' data in EntityArray::construct().
         * Those children Entity objects' data will constructed by their own construct() method. Even insertion
         * of XML objects representing children are done by abstract method of EntityArray::toXML(). </p>
         *
         * <p> Constructs only data of EntityArray's own. </p>
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        /**
         * <p> Get iterator to element. </p>
         *
         * <p> Searches the container for an element with a identifier equivalent to <i>key</i> and returns an
         * iterator to it if found, otherwise it returns an iterator to {@link end end()}. </p>
         *
         * <p> Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the elements are passed as arguments). </p>
         *
         * <p> Another member functions, {@link has has()} and {@link count count()}, can be used to just check
         * whether a particular <i>key</i> exists. </p>
         *
         * @param key Key to be searched for
         * @return An iterator to the element, if an element with specified <i>key</i> is found, or
         *		   {@link end end()} otherwise.
         */
        /**
         * <p> Whether have the item or not. </p>
         *
         * <p> Indicates whether a map has an item having the specified identifier. </p>
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the map has an item having the specified identifier.
         */
        has(key: any): boolean;
        /**
         * <p> Count elements with a specific key. </p>
         *
         * <p> Searches the container for elements whose key is <i>key</i> and returns the number of elements found. </p>
         *
         * @param key Key value to be searched for.
         *
         * @return The number of elements in the container with a <i>key</i>.
         */
        count(key: any): number;
        /**
         * <p> Get an element </p>
         *
         * <p> Returns a reference to the mapped value of the element identified with <i>key</i>. </p>
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @throw exception out of range
         *
         * @return A reference object of the mapped value (_Ty)
         */
        get(key: any): T;
        /**
         * <p> A tag name of children objects. </p>
         */
        CHILD_TAG(): string;
        /**
         * <p> Get an XML object represents the EntityArray. </p>
         *
         * <p> Archives the EntityArray's own member variables only to the returned XML object. </p>
         *
         * <p> Do not consider about archiving children Entity objects' data in EntityArray::toXML().
         * Those children Entity objects will converted to XML object by their own toXML() method. The
         * insertion of XML objects representing children are done by abstract method of
         * EntityArray::toXML(). </p>
         *
         * <p> Archives only data of EntityArray's own. </p>
         */
        toXML(): library.XML;
    }
    /**
     * @inheritdoc
     */
    abstract class EntityArray<T extends IEntity> extends std.Vector<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
    /**
     * @inheritdoc
     */
    abstract class EntityList<T extends IEntity> extends std.List<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
    /**
     * @inheritdoc
     */
    abstract class EntityDeque<T extends IEntity> extends std.Deque<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    interface IEntityCollection<T extends IEntity> extends IEntityGroup<T>, collection.ICollection<T> {
    }
    /**
     * @inheritdoc
     */
    abstract class EntityArrayCollection<T extends IEntity> extends collection.ArrayCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
    /**
     * @inheritdoc
     */
    abstract class EntityListCollection<T extends IEntity> extends collection.ListCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
    /**
     * @inheritdoc
     */
    abstract class EntityDequeCollection<T extends IEntity> extends collection.DequeCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    interface ICommunicator extends IProtocol {
        onClose: Function;
        close(): any;
    }
    interface IClientDriver extends ICommunicator {
        listen(listener: IProtocol): void;
    }
    /**
     * <p> An abstract server connector. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServerConnector extends ICommunicator {
        onConnect: Function;
        /**
         * <p> Connect to a server. </p>
         *
         * <p> If the connection fails immediately, either an event is dispatched or an exception is thrown:
         * an error event is dispatched if a host was specified, and an exception is thrown if no host
         * was specified. Otherwise, the status of the connection is reported by an event.
         * If the socket is already connected, the existing connection is closed first. </p>
         *
         * @param ip The name or IP address of the host to connect to.
         *			 If no host is specified, the host that is contacted is the host where the calling file resides. If
         *			 you do not specify a host, use an event listener to determine whether the connection was successful.
         * @param port The port number to connect to.
         */
        connect(ip: string, port: number): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> An interface for Invoke message chain. </p>
     *
     * <p> IProtocol is an interface for Invoke message, which is standard message of network I/O
     * in Samchon Framework, chain. The IProtocol interface is used to network drivers and some
     * classes which are in a relationship of chain of responsibility with those network drivers. </p>
     *
     * <p> In Samchon Framework, server side, IProtocol is one of the basic 3 + 1 components that
     * can make any type of network system in Samchon Framework with IServer and IClient. Following
     * the "chain of responsibility" pa1ttern, looking around classes in Samchon Framework, you
     * can see all related classes with network I/O are implemented from the IProtocol. </p>
     *
     * @see Invoke
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IProtocol {
        /**
         * <p> Sending message. </p>
         * <p> Sends message to related system or shifts the responsibility to chain. </p>
         *
         * @param invoke Invoke message to send
         */
        replyData(invoke: Invoke): void;
        /**
         * <p> Handling replied message. </p>
         * <p> Handles replied message or shifts the responsibility to chain. </p>
         *
         * @param invoke Replied invoke message
         */
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> Standard message of network I/O. </p>
     * <p> Invoke is a class used in network I/O in protocol package of Samchon Framework. </p>
     *
     * <p> The Invoke message has an XML structure like the result screen of provided example in below.
     * We can enjoy lots of benefits by the normalized and standardized message structure used in
     * network I/O. </p>
     *
     * <p> The greatest advantage is that we can make any type of network system, even how the system
     * is enourmously complicated. As network communication message is standardized, we only need to
     * concentrate on logical relationships between network systems. We can handle each network system
     * like a object (class) in OOD. And those relationships can be easily designed by using design
     * pattern. </p>
     *
     * <p> In Samchon Framework, you can make any type of network system with basic 3 + 1 componenets
     * (IProtocol, IServer and IClient + ServerConnector), by implemens or inherits them, like designing
     * classes of S/W architecture. </p>
     *
     * @see IProtocol
     * @author Jeongho Nam <http://samchon.org>
     */
    class Invoke extends EntityArray<InvokeParameter> {
        /**
         * <p> Listener, represent function's name. </p>
         */
        protected listener: string;
        constructor(listener: string);
        /**
         * Copy Constructor.
         *
         * @param invoke
         */
        constructor(invoke: Invoke);
        /**
         * Construct from XML.
         *
         * @param xml
         */
        constructor(xml: library.XML);
        constructor(listener: string, begin: std.VectorIterator<InvokeParameter>, end: std.VectorIterator<InvokeParameter>);
        /**
         * Construct from listener and parametric values.
         *
         * @param listener
         * @param parameters
         */
        constructor(listener: string, ...parameters: any[]);
        /**
         * @inheritdoc
         */
        protected createChild(xml: library.XML): InvokeParameter;
        /**
         * Get listener.
         */
        getListener(): string;
        /**
         * <p> Get arguments for Function.apply(). </p>
         *
         * @return An array containing values of the contained parameters.
         */
        getArguments(): Array<any>;
        /**
         * <p> Apply to a matched function. </p>
         */
        apply(obj: IProtocol): boolean;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        CHILD_TAG(): string;
    }
}
declare namespace samchon.protocol {
    /**
     * A parameter belongs to an Invoke.
     *
     * @see Invoke
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvokeParameter extends Entity {
        /**
         * <p> Name of the parameter. </p>
         *
         * @details Optional property, can be omitted.
         */
        protected name: string;
        /**
         * <p> Type of the parameter. </p>
         */
        protected type: string;
        /**
         * <p> Value of the parameter. </p>
         */
        protected value: any;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Initialization Constructor without type specification.
         *
         * @param name
         * @param val
         */
        constructor(name: string, val: any);
        /**
         * Initialization Constructor.
         *
         * @param name
         * @param type
         * @param val
         */
        constructor(name: string, type: string, val: any);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        setValue(value: any): void;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * Get name.
         */
        getName(): string;
        /**
         * Get type.
         */
        getType(): string;
        /**
         * Get value.
         */
        getValue(): any;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    class InvokeHistory extends Entity {
        private uid;
        private listener;
        private startTime;
        private endTime;
        /**
         * Default Constructor.
         */
        constructor();
        constructor(invoke: Invoke);
        construct(xml: library.XML): void;
        notifyEnd(): void;
        key(): number;
        getUID(): number;
        getListener(): string;
        getStartTime(): Date;
        getEndTime(): Date;
        getElapsedTime(): number;
        TAG(): string;
        toXML(): library.XML;
        toInvoke(): Invoke;
    }
}
declare namespace samchon.protocol {
    abstract class Server {
        abstract open(port: number): void;
        protected abstract addClient(clientDriver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    class NormalCommunicator implements ICommunicator {
        protected listener: IProtocol;
        protected socket: socket.socket;
        onClose: Function;
        private data;
        private content_size;
        constructor();
        close(): void;
        protected start_listen(): void;
        private listen_piece(piece);
        private listen_header();
        private listen_data();
        replyData(invoke: Invoke): void;
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    abstract class NormalServer extends Server {
        private server;
        open(port: number): void;
        private handle_connect(socket);
    }
}
declare namespace samchon.protocol {
    class NormalClientDriver extends NormalCommunicator implements IClientDriver {
        constructor(socket: socket.socket);
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    class NormalServerConnector extends NormalCommunicator implements IServerConnector {
        onConnect: Function;
        constructor(listener: IProtocol);
        connect(ip: string, port: number): void;
        private handle_connect(...arg);
    }
}
declare namespace samchon.protocol {
    abstract class SharedWorkerServer extends Server {
        open(): void;
    }
}
declare namespace samchon.protocol {
    class SharedWorkerClientDriver implements IClientDriver {
        private listener;
        onClose: Function;
        listen(listener: IProtocol): void;
        close(): void;
        sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    class SharedWorkerConnector implements IServerConnector {
        private listener;
        private driver;
        onConnect: Function;
        onClose: Function;
        constructor(listener: IProtocol);
        connect(jsFile: string): void;
        connect(jsFile: string, name: string): void;
        close(): void;
        sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
        private reply_message(event);
    }
}
declare namespace samchon.protocol {
    namespace socket {
        type socket = any;
        type server = any;
        type http_server = any;
    }
    namespace websocket {
        type connection = any;
        type request = any;
        type IMessage = any;
        type ICookie = any;
        type client = any;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> Base class for web-communicator, {@link WebClientDriver} and {@link WebServerConnector}. </p>
     *
     * <p> This class {@link WebCommunicatorBase} subrogates network communication for web-communicator classes,
     * {@link WebClinetDriver} and {@link WebServerConnector}. The web-communicator and this class
     * {@link WebCommunicatorBase} share same interface {@link IProtocol} and have a <b>chain of responsibily</b>
     * relationship. </p>
     *
     * <p> When an {@link Invoke} message was delivered from the connected remote system, then this class calls
     * web-communicator's {@link WebServerConnector.replyData replyData()} method. Also, when called web-communicator's
     * {@link WebClientDriver.sendData sendData()}, then {@link sendData sendData()} of this class will be caleed. </p>
     *
     * <ul>
     *	<li> this.replyData() -> communicator.replyData() </li>
     *	<li> communicator.sendData() -> this.sendData() </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class WebCommunicator implements ICommunicator {
        /**
         * Communicator of web-socket.
         */
        protected listener: IProtocol;
        /**
         * Connection driver, a socket for web-socket.
         */
        protected connection: websocket.connection;
        onClose: Function;
        /**
         * Initialization Constructor.
         *
         * @param communicator Communicator of web-socket.
         * @param connection Connection driver, a socket for web-socket.
         */
        constructor();
        /**
         * Listen message from remoate system.
         */
        /**
         * Close the connection.
         */
        close(): void;
        /**
         * <p> Handle raw-data received from the remote system. </p>
         *
         * <p> Queries raw-data received from the remote system. When the raw-data represents an formal {@link Invoke}
         * message, then it will be sent to the {@link replyData}. </p>
         *
         * @param message A raw-data received from the remote system.
         */
        protected handle_message(message: websocket.IMessage): void;
        protected handle_close(): void;
        /**
         * Reply {@link Invoke} message from the remote system. </p>
         *
         * <p> {@link WebCommunicator} delivers replied {@link Invoke} message from remote system to its parent class,
         * {@link communicator}. </p>
         *
         * @param invoke An Invoke message replied from the remote system.
         */
        replyData(invoke: Invoke): void;
        /**
         * <p> Send message to the remote system. </p>
         *
         * {@link WebCommunicator}.{@link sendData} is called from its parent {@link communicator}'s sendData(). </p>
         *
         * @param invoke An Inovoke message to send to the remote system.
         */
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    abstract class WebServer extends Server {
        /**
         * A server handler.
         */
        private http_server;
        /**
         * Sequence number for issuing session id.
         */
        private sequence;
        /**
         * @hidden
         */
        private my_port;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        protected abstract addClient(driver: WebClientDriver): void;
        /**
         * <p> Handle request from a client system. </p>
         *
         * <p> This method {@link handle_request} will be called when a client is connected. It will call an abstract
         * method method {@link addClient addClient()} who handles an accepted client. If the newly connected client
         * doesn't have its own session id, then a new session id will be issued. </p>
         *
         * @param request Requested header.
         */
        private handle_request(request);
        /**
         * <p> Get session id from a newly connected. </p>
         *
         * <p> Queries ordinary session id from cookies of a newly connected client. If the client has not, a new
         * session id will be issued. </p>
         *
         * @param cookies Cookies from the remote client.
         */
        private get_session_id(cookies);
        /**
         * Issue a new session id.
         */
        private issue_session_id();
    }
}
declare namespace samchon.protocol {
    class WebClientDriver extends WebCommunicator implements IClientDriver {
        /**
         * Requested path.
         */
        private path;
        /**
         * Session ID, an identifier of the remote client.
         */
        private session_id;
        private listening_;
        /**
         * Initialization Constructor.
         *
         * @param connection Connection driver, a socket for web-socket.
         * @param path Requested path.
         * @param session_id Session ID, an identifier of the remote client.
         */
        constructor(connection: websocket.connection, path: string, session_id: string);
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
        /**
         * Get requested path.
         */
        getPath(): string;
        /**
         * Get session ID, an identifier of the remote client.
         */
        getSessionID(): string;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> A server connector for web-socket protocol. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class WebServerConnector extends WebCommunicator implements IServerConnector {
        /**
         * <p> A socket for network I/O. </p>
         *
         * <p> Note that, {@link socket} is only used in web-browser environment. </p>
         */
        private browser_socket;
        /**
         * <p> A driver for server connection. </p>
         *
         * <p> Note that, {@link node_client} is only used in NodeJS environment. </p>
         */
        private node_client;
        onConnect: Function;
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        connect(ip: string, port: number, path?: string): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        private handle_browser_connect(event);
        private handle_browser_message(event);
        private handle_node_connect(connection);
    }
}
declare namespace samchon.protocol.external {
    interface IExtServer extends Server {
    }
    class ExtNormalServerBase extends NormalServer implements IExtServer {
        private system_array;
        constructor(system_array: ExternalSystemArray);
        protected addClient(driver: IClientDriver): void;
    }
    class ExtWebServerBase extends WebServer implements IExtServer {
        private system_array;
        constructor(system_array: ExternalSystemArray);
        protected addClient(driver: IClientDriver): void;
    }
    class ExtSharedWorkerServerBase extends SharedWorkerServer implements IExtServer {
        private system_array;
        constructor(system_array: ExternalSystemArray);
        protected addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol.external {
    abstract class ExternalSystem extends EntityArrayCollection<ExternalSystemRole> implements IProtocol {
        protected communicator: ICommunicator;
        protected name: string;
        /**
         * Default Constructor.
         */
        constructor();
        key(): string;
        getName(): string;
        sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
        TAG(): string;
        CHILD_TAG(): string;
    }
}
declare namespace samchon.protocol.external {
    interface IExternalServer extends ExternalSystem {
        connect(): void;
        getIP(): string;
        getPort(): number;
    }
    abstract class ExternalServer extends ExternalSystem implements IExternalServer {
        protected ip: string;
        protected port: number;
        constructor();
        protected abstract createServerConnector(): IServerConnector;
        connect(): void;
        getIP(): string;
        getPort(): number;
    }
}
declare namespace samchon.protocol.external {
    abstract class ExternalSystemArray extends EntityArrayCollection<ExternalSystem> implements IProtocol {
        private server;
        /**
         * Default Constructor.
         */
        constructor();
        protected abstract createServer(): IExtServer;
        protected createChild(xml: library.XML): ExternalSystem;
        protected abstract createExternalClient(driver: IClientDriver): ExternalSystem;
        protected abstract createExternalServer(xml: library.XML): IExternalServer;
        protected addClient(driver: IClientDriver): void;
        hasRole(key: string): boolean;
        getRole(key: string): ExternalSystemRole;
        open(port: number): void;
        connect(): void;
        sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
        TAG(): string;
        CHILD_TAG(): string;
    }
}
declare namespace samchon.protocol.external {
    abstract class ExternalSystemRole extends Entity implements IProtocol {
        private system;
        private name;
        constructor(system: ExternalSystem);
        key(): string;
        getSystem(): ExternalSystem;
        getName(): string;
        sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
        TAG(): string;
    }
}
declare namespace samchon.protocol.slave {
    abstract class SlaveSystem extends external.ExternalSystem {
        /**
         * Default Constructor.
         */
        constructor();
        replyData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol.slave {
    interface ISlaveServerBase extends Server {
    }
    class SlaveNormalServerBase extends NormalServer implements ISlaveServerBase {
        private slave_system;
        constructor(slave_system: SlaveSystem);
        protected addClient(driver: IClientDriver): void;
    }
    class SlaveWebServerBase extends WebServer implements ISlaveServerBase {
        private slave_system;
        constructor(slave_system: SlaveSystem);
        protected addClient(driver: IClientDriver): void;
    }
    class SlaveSharedWorkerServerBase extends SharedWorkerServer implements ISlaveServerBase {
        private slave_system;
        constructor(slave_system: SlaveSystem);
        protected addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol.master {
    abstract class MediatorSystem extends slave.SlaveSystem {
        private system_array;
        private progress_list;
        constructor(systemArray: ParallelSystemArray);
        abstract start(): void;
        notifyEnd(uid: number): void;
    }
}
declare namespace samchon.protocol.master {
    class PRInvokeHistory extends InvokeHistory {
        private index;
        private size;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from an Invoke message.
         *
         * @param invoke
         */
        constructor(invoke: Invoke);
        getIndex(): number;
        getSize(): number;
    }
}
declare namespace samchon.protocol.master {
    abstract class ParallelSystem extends external.ExternalSystem {
        private systemArray;
        private progress_list;
        private history_list;
        private performance;
        constructor(systemArray: ParallelSystemArray);
        getSystemArray(): ParallelSystemArray;
        getPerformance(): number;
        private send_piece_data(invoke, index, size);
        private report_invoke_history(xml);
    }
}
declare namespace samchon.protocol.master {
    interface IParallelServer extends ParallelSystem, external.IExternalServer {
    }
    abstract class ParallelServer extends ParallelSystem implements IParallelServer {
        protected ip: string;
        protected port: number;
        constructor(systemArray: ParallelSystemArray);
        protected abstract createServerConnector(): IServerConnector;
        connect(): void;
        getIP(): string;
        getPort(): number;
    }
}
declare namespace samchon.protocol.master {
    abstract class ParallelSystemArray extends external.ExternalSystemArray {
        private history_sequence;
        constructor();
        protected abstract createExternalClient(driver: IClientDriver): ParallelSystem;
        protected abstract createExternalServer(xml: library.XML): IParallelServer;
        at(index: number): ParallelSystem;
        get(key: any): ParallelSystem;
        sendSegmentData(invoke: Invoke, size: number): void;
        sendPieceData(invoke: Invoke, index: number, size: number): void;
        private notify_end(history);
        private normalize_performance();
    }
}
declare namespace samchon.protocol.master {
    abstract class ParallelSystemArrayMediator extends ParallelSystemArray {
        open(port: number): void;
        connect(): void;
        private start_mediator();
    }
}
declare namespace samchon.protocol.service {
    abstract class Client implements protocol.IProtocol {
        private user;
        private service;
        private driver;
        private no;
        /**
         * Default Constructor.
         */
        constructor(user: User, driver: WebClientDriver);
        protected abstract createService(path: string): Service;
        close(): void;
        getUser(): User;
        getService(): Service;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
        protected changeService(path: string): void;
    }
}
declare namespace samchon.protocol.service {
    abstract class Server extends protocol.WebServer implements IProtocol {
        private session_map;
        private account_map;
        /**
         * Default Constructor.
         */
        constructor();
        protected abstract createUser(): User;
        has(account: string): boolean;
        get(account: string): User;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
        protected addClient(driver: WebClientDriver): void;
        private erase_user(user);
    }
}
declare namespace samchon.protocol.service {
    abstract class Service implements protocol.IProtocol {
        private client;
        private path;
        /**
         * Default Constructor.
         */
        constructor(client: Client, path: string);
        destructor(): void;
        /**
         * Get client.
         */
        getClient(): Client;
        /**
         * Get path.
         */
        getPath(): string;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.protocol.service {
    abstract class User extends collection.HashMapCollection<number, Client> implements protocol.IProtocol {
        private server;
        private session_id;
        private sequence;
        private account_id;
        private authority;
        /**
         * Default Constructor.
         */
        constructor(server: Server);
        protected abstract createClient(driver: WebClientDriver): Client;
        private handle_erase_client(event);
        getServer(): Server;
        getAccountID(): string;
        getAuthority(): number;
        setAccount(id: string, authority: number): void;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
    }
}
