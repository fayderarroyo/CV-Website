# CV Website - Guía de Actualización

## 🚀 Comandos Git para Actualizaciones Rápidas

### Para actualizar la página web (cambios pequeños):

```bash
# 1. Agregar todos los cambios
git add .

# 2. Crear commit con mensaje descriptivo
git commit -m "Descripción del cambio"

# 3. Subir a GitHub
git push origin main
```

### Ejemplo: Actualizar una imagen

```bash
git add assets/images/foto_personal.jpg
git commit -m "Actualizar foto de perfil"
git push origin main
```

### Ejemplo: Actualizar estilos CSS

```bash
git add styles.css
git commit -m "Ajustar colores del tema"
git push origin main
```

### Ejemplo: Actualizar contenido HTML

```bash
git add index.html
git commit -m "Actualizar información de contacto"
git push origin main
```

## ⏱️ Tiempo de Actualización

Después de hacer `git push`, espera **1-2 minutos** para que GitHub Pages actualice el sitio.

## 🔄 Ver el estado de tus cambios

```bash
# Ver qué archivos han cambiado
git status

# Ver el historial de commits
git log --oneline -5
```

## 📝 Notas Importantes

- **Siempre usa mensajes descriptivos** en tus commits
- **Espera 1-2 minutos** después del push para ver los cambios en la web
- **Recarga con Ctrl + F5** para limpiar el caché del navegador
- **URL del sitio**: https://fayderarroyo.github.io/CV-Website/

## 🗂️ Estructura del Proyecto

```
cv-website/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # JavaScript
├── data.js            # Datos del CV
├── assets/
│   ├── images/        # Imágenes (foto, proyectos)
│   └── documents/     # CVs en PDF
└── streamlit-dashboard/  # Proyecto del dashboard (separado)
```

## ⚠️ Archivos a NO Incluir en Git

El archivo `.gitignore` ya está configurado para excluir:
- `*.parquet` (archivos de base de datos grandes)
- `dashboard/` (carpeta con datos grandes)
- `__pycache__/` (archivos temporales de Python)
