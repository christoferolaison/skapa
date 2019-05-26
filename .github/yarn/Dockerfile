FROM node:10

LABEL version="0.0.0"

LABEL com.github.actions.name="GitHub Action for Skapa"
LABEL com.github.actions.description="Wraps the Skapa CLI to enable common commands."
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="red"

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
CMD ["help"]