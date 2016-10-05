﻿/// <reference path="../../API.ts" />

/// <reference path="../../protocol/InvokeHistory.ts" />

namespace samchon.templates.distributed
{
	/**
	 * History of an {@link Invoke} message.
	 * 
	 * The {@link PRInvokeHistory} is a class archiving history log of an {@link Invoke} message which requests the
	 * *distributed process*, created whenever {@link DistributedProcess.sendData} is called.
	 * 
	 * When the *distributed process* has completed, then {@link complete complete()} is called and the *elapsed time* is 
	 * determined. The elapsed time is utilized for computation of {@link DistributedSystem.getPerformance performance index}
	 * and {@link DistributedProcess.getResource resource index} of related objects.
	 * 
	 * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
	 *		  target="_blank">
	 *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
	 *		 style="max-width: 100%" />
	 * </a>
	 *
	 * @handbook [Templates - Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class DSInvokeHistory 
		extends protocol.InvokeHistory
	{
		/**
		 * @hidden
		 */
		private system_: DistributedSystem;
		
		/**
		 * @hidden
		 */
		private process_: DistributedProcess;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Construct from a DistributedSystem.
		 * 
		 * @param system The {@link DistributedSystem} object who sent the {@link Invoke} message.
		 */
		public constructor(system: DistributedSystem);

		/**
		 * Initilizer Constructor.
		 * 
		 * @param system The {@link DistributedSystem} object who sent the {@link Invoke} message.
		 * @param process The {@link DistributedProcess} object who sent the {@link Invoke} message.
		 * @param invoke An {@link Invoke} message requesting the *distributed process*.
		 */
		public constructor(system: DistributedSystem, process: DistributedProcess, invoke: protocol.Invoke);

		public constructor(system: DistributedSystem, process: DistributedProcess = null, invoke: protocol.Invoke = null)
		{
			super(invoke);

			this.system_ = system;
			this.process_ = process;
		}

		/**
		 * @inheritdoc
		 */
		public construct(xml: library.XML): void
		{
			super.construct(xml);

			if (xml.hasProperty("process") == false)
			{
				this.process_ = null;
				return;
			}

			let system_array: DistributedSystemArray = this.system_.getSystemArray();
			let role_name: string = xml.getProperty("process");

			if (system_array.hasProcess(role_name) == true)
				this.process_ = system_array.getProcess(role_name);
			else
				this.process_ = null;
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		/**
		 * Get the related {@link DistributedSystem} object.
		 */
		public getSystem(): DistributedSystem
		{
			return this.system_;
		}

		/**
		 * Get the related {@link DistributedProcess} object.
		 */
		public getProcess(): DistributedProcess
		{
			return this.process_;
		}

		/* ---------------------------------------------------------
			EXPORTERS
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public toXML(): library.XML
		{
			let xml: library.XML = super.toXML();
			if (this.process_ != null)
				xml.setProperty("process", this.process_.getName());

			return xml;
		}
	}
}