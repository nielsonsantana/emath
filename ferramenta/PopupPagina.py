from pyjamas import DOM
from pyjamas import Factory
from pyjamas import Window

from pyjamas.ui.PopupPanel import PopupPanel
from pyjamas.ui.Grid import Grid
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Button import Button
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui import HasHorizontalAlignment,HasVerticalAlignment
from pyjamas.ui.Label import Label
from pyjamas.ui.TextBox import TextBox
from pyjamas.Canvas2D import Canvas
from __pyjamas__ import jsinclude
import pyjslib
from __pyjamas__ import JS, doc
import dynamic

#from __javascript__ import test_fn
class PopupPagina(PopupPanel):
    def __init__(self, autoHide=None, modal=True, **kwargs):
        
        PopupPanel.__init__(self, autoHide, modal, **kwargs)
        
        datasource = None
        id = None
        
        if kwargs.has_key("datasrc"):
            datasource = kwargs["datasrc"]
        if kwargs.has_key("id"):
            id = kwargs["id"]

        self.setSize(Window.getClientWidth()-100, Window.getClientHeight()-100)
        self.setPopupPosition(50, 30)
        self.caption = HTML()
        self.child = None
        self.setText("Soma de Matrizes.          Os botões desta tela ainda não estão funcionando.")
        
        #self.canvas =  Canvas(Window.getClientWidth()-200,Window.getClientHeight()-300)
        #setattr(self.canvas, "datasrc", "teste.pjs")
        #self.canvas.setID("soma")
        
        #self.c1 = DOM.createElement("canvas")
        
        #DOM.setAttribute(self.canvas, "datasrc", "teste.pjs")
        #DOM.setAttribute(self.canvas, "id", "testjs")
        
        self.dragging = False
        self.dragStartX = 0
        self.dragStartY = 0
        
        self.btnAutomatic = Button("Automatico")
        self.btnStepByStep = Button("Passo a passo")
        self.btnFechar = Button("Fechar")
        self.txtColunas = TextBox();
        self.txtLinhas = TextBox();
        self.lblStatus = Label("Label para Status"); 
        
        #Eventos
        self.btnFechar.addClickListener(self.onFecharPopup)
        
        #Cabeçalho da poupPanel
        self.grid = Grid(1,8)
        self.grid.setWidth(self.getWidth())
        self.grid.setText(0, 0, "Nº Linhas:")
        self.grid.setWidget(0, 1, self.txtLinhas)
        self.grid.setText(0, 2, "Nº Colunas:")
        self.grid.setWidget(0, 3, self.txtColunas)
        self.grid.setWidget(0, 4, self.btnAutomatic)
        self.grid.setWidget(0, 5, self.btnStepByStep)
        self.grid.setWidget(0, 7, self.btnFechar)
        self.grid.getCellFormatter().setAlignment(0,7, HasHorizontalAlignment.ALIN_RIGTH, HasVerticalAlignment.ALIGN_MIDDLE)
        
        self.panel = FlexTable(Height="100%", width="100%", BorderWidth="0",
                                CellPadding="0", CellSpacing="0")
        
        self.panel.setWidget(0, 0, self.caption)
        self.panel.setWidget(1, 0, self.grid)
        self.panel.getCellFormatter().setHeight(2, 0, "100%")
        self.panel.getCellFormatter().setWidth(2, 0, "100%")
        self.panel.getCellFormatter().setAlignment(2, 0, HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_TOP)
        self.panel.setID("contetepopup")

        self.panel.setHTML(2, 0, ("<canvas id='%s' datasrc='%s' width='%d' height='%d' style='image-rendering: optimizespeed !important; '></canvas>")
                           % ( id, datasource, Window.getClientWidth()-100, abs(Window.getClientHeight()-200)))
        
        self.panel.setWidget(3, 0, self.lblStatus)
        
        self.panel.setStyleName("dialogContent")

        PopupPanel.setWidget(self, self.panel)

        self.setStyleName("gwt-DialogBox")
        self.caption.setStyleName("Caption")
        self.caption.addMouseListener(self)
        
        #importando script
        #dynamic.ajax_import("teste.js", names = ['test_fn'])

    def getHTML(self):
        return self.caption.getHTML()

    def getText(self):
        return self.caption.getText()

    def onEventPreview(self, event):
        # preventDefault on mousedown events, outside of the
        # dialog, to stop text-selection on dragging
        type = DOM.eventGetType(event)
        if type == 'mousedown':
            target = DOM.eventGetTarget(event)
            elem = self.caption.getElement()
            event_targets_popup = target and DOM.isOrHasChild(elem, target)
            if event_targets_popup:
                DOM.eventPreventDefault(event)
        return PopupPanel.onEventPreview(self, event)

    def onMouseDown(self, sender, x, y):
        self.dragging = True
        DOM.setCapture(self.caption.getElement())
        self.dragStartX = x
        self.dragStartY = y

    def onMouseMove(self, sender, x, y):
        if self.dragging:
            absX = x + self.getAbsoluteLeft()
            absY = y + self.getAbsoluteTop()
            self.setPopupPosition(absX - self.dragStartX, absY - self.dragStartY)

    def onMouseUp(self, sender, x, y):
        self.dragging = False
        DOM.releaseCapture(self.caption.getElement())
    
    def onMouseLeave(self, self,x, y):
        pass
    
    def onMouseEnter(self, self,x, y):
        pass

    def remove(self, widget):
        if self.child != widget:
            return False

        self.panel.remove(widget)
        self.child = None
        return True

    def setHTML(self, html):
        self.caption.setHTML(html)

    def setText(self, text):
        self.caption.setText(text)

    def doAttachChildren(self):
        PopupPanel.doAttachChildren(self)
        self.caption.onAttach()

    def doDetachChildren(self):
        PopupPanel.doDetachChildren(self)
        self.caption.onDetach()

    def setWidget(self, widget):
        if self.child is not None:
            self.panel.remove(self.child)

        if widget is not None:
            self.panel.setWidget(1, 0, widget)

        self.child = widget
    def onFecharPopup(self, event):
        self.hide();
