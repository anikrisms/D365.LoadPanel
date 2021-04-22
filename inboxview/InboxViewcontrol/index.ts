import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;

export class InboxViewcontrol implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	private readonly widgetIframeId ="SidePanelIFrame";
	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		const containerDiv = document.createElement("div");
		containerDiv.setAttribute("id", "dff76d3d-900c-4eb9-9070-190ba7a79280");
		containerDiv.setAttribute("tabindex", "-1");    // Needed to receive the focus event
		containerDiv.setAttribute("role", "tabpanel");
		containerDiv.setAttribute("style", "height: 100%;");
		const iFrame = document.createElement("iframe");
		iFrame.id = "SidePanelIFrame";
		iFrame.allowFullscreen = true;
		iFrame.setAttribute("allowfullscreen", "true");
		iFrame.setAttribute("webkitallowfullscreen", "true");
		iFrame.setAttribute("mozallowfullscreen", "true");
		iFrame.setAttribute("allow", "microphone; camera; geolocation");    // TODO - should we make these configurable?
		iFrame.setAttribute("sandbox", "allow-forms allow-popups allow-scripts allow-same-origin allow-modals allow-downloads"); // TODO: make configurable?
		// widgetIFrame.setAttribute("style", "border-top: 1px solid;border-color: #F5F5F5;");
		iFrame.height = "100%";
		iFrame.width = "100%";
		iFrame.src = "https://aurorabapenv84d15.crm10.dynamics.com//WebResources/cre7f_widgets_container.html";
		iFrame.title = "widgetIFrame";
		containerDiv.appendChild(iFrame);

		container.appendChild(containerDiv);

		this.loadControlDiv();
	}

	public loadControlDiv =() => 
	{
		let widgetIFrame = (window.parent.document.getElementById(this.widgetIframeId) as HTMLIFrameElement);
debugger;
		var doc = widgetIFrame.contentDocument ? widgetIFrame.contentDocument : widgetIFrame.contentWindow?.document;
		if (widgetIFrame != null) {
			widgetIFrame.onload = () => {
				debugger;
				const containerDiv = document.createElement("div");
				containerDiv.setAttribute("id", "3f20cd91-baff-4fb7-b270-4b188492eb85");
				containerDiv.setAttribute("tabindex", "-1");    // Needed to receive the focus event
				containerDiv.setAttribute("role", "tabpanel");
				containerDiv.setAttribute("style", "height: 100%;");
				const iFrame = document.createElement("iframe");
				iFrame.id = "SidePanelChatControlIFrame";
				iFrame.allowFullscreen = true;
				iFrame.setAttribute("allowfullscreen", "true");
				iFrame.setAttribute("webkitallowfullscreen", "true");
				iFrame.setAttribute("mozallowfullscreen", "true");
				iFrame.setAttribute("allow", "microphone; camera; geolocation");    // TODO - should we make these configurable?
				iFrame.setAttribute("sandbox", "allow-forms allow-popups allow-scripts allow-same-origin allow-modals allow-downloads"); // TODO: make configurable?
				// widgetIFrame.setAttribute("style", "border-top: 1px solid;border-color: #F5F5F5;");
				iFrame.height = "100%";
				iFrame.width = "100%";
				iFrame.src = "https://aurorabapenv84d15.crm10.dynamics.com//WebResources/cre7f_convControl.htm";
				iFrame.title = "widgetconvControlIFrame";
				containerDiv.appendChild(iFrame);
				doc?.getElementById("widgetControlDiv")?.appendChild(containerDiv);

				let convControlIFrame = (document.getElementById("SidePanelChatControlIFrame") as HTMLIFrameElement);
				var docControl = convControlIFrame.contentDocument ? convControlIFrame.contentDocument :
					convControlIFrame.contentWindow?.document;

				iFrame.onload = () => {
					debugger;
					fetch("https://aurorabapenv84d15.crm10.dynamics.com//WebResources/cre7f_convControlDiv.htm")
						.then((response) => response.text())
						.then((html) => {
							debugger;
							let x = docControl?.getElementById("convContainer");
							(x as any).innerHTML = html;
						});

				}
			}
		}

	}

	private onload = () => {
		const containerDiv = document.createElement("div");
		containerDiv.setAttribute("id", "3f20cd91-baff-4fb7-b270-4b188492eb85");
		containerDiv.setAttribute("tabindex", "-1");    // Needed to receive the focus event
		containerDiv.setAttribute("role", "tabpanel");
		containerDiv.setAttribute("style", "height: 100%;");
		const iFrame = document.createElement("iframe");
		iFrame.id = "SidePanelChatControlIFrame";
		iFrame.allowFullscreen = true;
		iFrame.setAttribute("allowfullscreen", "true");
		iFrame.setAttribute("webkitallowfullscreen", "true");
		iFrame.setAttribute("mozallowfullscreen", "true");
		iFrame.setAttribute("allow", "microphone; camera; geolocation");    // TODO - should we make these configurable?
		iFrame.setAttribute("sandbox", "allow-forms allow-popups allow-scripts allow-same-origin allow-modals allow-downloads"); // TODO: make configurable?
		// widgetIFrame.setAttribute("style", "border-top: 1px solid;border-color: #F5F5F5;");
		iFrame.height = "100%";
		iFrame.width = "100%";
		iFrame.src = "https://aurorabapenv84d15.crm10.dynamics.com//WebResources/cre7f_convControl.htm";
		iFrame.title = "widgetconvControlIFrame";
		containerDiv.appendChild(iFrame);
				// doc.getElementById("widgetControlDiv").appendChild(containerDiv);

	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}

}